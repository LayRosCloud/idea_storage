import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/kit/card";

export function AuthLayout({
  form,
  title,
  footerSocial,
  footerText,
}: {
  form: React.ReactNode;
  title: React.ReactNode;
  footerSocial?: React.ReactNode;
  footerText?: React.ReactNode;
}) {
  return (
    <main className="grow flex flex-col items-center auth min-h-screen justify-center">
      <div className="w-full max-w-[436px]">
        <CardHeader className="justify-items-center">
          <img src="/logo.svg" className="w-[100px] h-[100px]" />
          <CardTitle className="text-[24px] mb-5">{title} в Protobin</CardTitle>
        </CardHeader>
        <CardContent>{form}</CardContent>
        <CardFooter className="flex flex-col">
          {footerSocial}
          {footerText &&<p className="text-sm text-muted-foreground mt-3 [&_a]:underline [&_a]:text-blue-500">
            {footerText}
          </p>}
        </CardFooter>
      </div>
    </main>
  );
}
