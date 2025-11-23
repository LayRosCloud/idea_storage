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

const restoreSchema = z.object({
    password: z
      .string({
        message: "Пароль обязательное поле",
      })
      .min(5, "Пароль должен быть больше 5 символов"),
    confirmPassword: z
      .string({ message: "Подтвердите пароль" })
      .min(5, "Пароль должен быть больше 5 символов"),
}).refine((data) => data.confirmPassword === data.password, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export function RestorePasswordForm() {

  const form = useForm({
    resolver: zodResolver(restoreSchema),
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="введите пароль"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="повторите пароль"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="primary" type="submit">
          Восстановить
        </Button>
      </form>
    </Form>
  );
}
