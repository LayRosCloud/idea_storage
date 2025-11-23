import { Button } from "@/shared/ui/kit/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLogin } from "../model/use-login";
import { Link } from "react-router-dom";
import { Routes } from "@/shared/model/routes";

const loginSchema = z.object({
  email: z.email("Email имеет неправильный формат"),
  password: z
    .string({
      message: "Пароль обязательное поле",
    })
    .min(5, "Пароль должен быть больше 5 символов"),
});

export function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });
  form.control.getFieldState('email')
  const { login, isPending, errorMessage } = useLogin();

  const onSubmit = form.handleSubmit(login);

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="имя пользователя или почта"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="пароль" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          to={Routes.FORGOT_PASSWORD + `?email=${encodeURIComponent(form.watch("email") ?? '')}`}
          className="underline text-blue-500 text-sm/6 ml-auto mr-0"
        >
          Забыли пароль?
        </Link>
        {errorMessage && <p className="text-destructive">{errorMessage}</p>}
        <Button variant="primary" disabled={isPending} type="submit">
          Авторизоваться
        </Button>
      </form>
    </Form>
  );
}
