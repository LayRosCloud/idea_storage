import { Button } from "@/shared/ui/kit/button";
import { Form, FormControl, FormField, FormItem } from "@/shared/ui/kit/form";
import { Input } from "@/shared/ui/kit/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCodeInputs } from "../model/use-code";

export const codeSchema = z.object({
  code: z.array(z.string().length(1).optional()).length(6),
});

type CodeFormValues = z.infer<typeof codeSchema>;

export function VerifyCodeForm() {
  const form = useForm({
    resolver: zodResolver(codeSchema),
  });
  const {nodeRef, elements} = useCodeInputs();

  const handleKeyDown = async (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    const allowDigits = new Set('0123456789'.split(''))

    if (event.ctrlKey && event.code === 'KeyV') {
      const text = await navigator.clipboard.readText()
      if (text.length !== 6) {
        return;
      }
      const keys = text.split('');
      if (keys.find(key => !allowDigits.has(key))) {
        return;
      }
      form.setValue("code", keys, {shouldValidate: true});
      setTimeout(() => {
        const input = elements.find(el => el.name === `code.${5}`);
        input?.focus();
      }, 0);
      onSubmit({code: keys})
      return;
    }

    if (event.key === "Backspace") {
      const newCode = [...form.getValues("code")];
      newCode[index] = ""
      form.setValue("code", newCode, { shouldValidate: true });
      
      form.setValue("code", newCode, { shouldValidate: true });
      setTimeout(() => {
        const input = elements.find(el => el.name === `code.${index - 1}`);
        input?.focus();
      }, 0);
      return
    }
    if (allowDigits.has(event.key)) {
      
      const newCode = [...form.getValues("code")];
      newCode[index] = event.key
      form.setValue("code", newCode, { shouldValidate: true });
      if (index + 1 >= 6) {
        onSubmit({code: newCode})
      }
      setTimeout(() => {
        const input = elements.find(el => el.name === `code.${index + 1}`);
        input?.focus();
      }, 0);
    }
  };

  const onSubmit = (data: CodeFormValues) => {
    const codeString = data.code.join("");
    console.log("Отправленный код:", codeString);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-row justify-center">
          {Array.from({ length: 6 }, (_, i) => (
            <FormField
              key={i}
              control={form.control}
              name={`code.${i}`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="w-[50px] h-[50px] last:mr-3 text-center text-4xl"
                      {...field}
                      ref={nodeRef}
                      onChange={(e) => e.preventDefault()}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button variant="primary" type="submit">
          Отправить код
        </Button>
      </form>
    </Form>
  );
}
