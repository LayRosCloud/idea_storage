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
import { useSearchParams } from "react-router-dom";

const forgotSchema = z.object({
  email: z.email("Email имеет неправильный формат")
});

export function ForgotPasswordForm() {
    const [searchParams] = useSearchParams();
  const form = useForm({
    resolver: zodResolver(forgotSchema),
  });
  form.setValue('email', searchParams.get('email') ?? '')

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="введите почту"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="primary" disabled={true} type="submit">
          Повторить попытку (60 с.)
        </Button>
      </form>
    </Form>
  );
}
