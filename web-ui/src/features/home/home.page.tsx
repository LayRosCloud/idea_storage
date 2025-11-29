import { Footer } from "../footer";
import { ViewSection } from "./view-section";
import { CtaSection } from "./cta-section";
import { HeroSection } from "./hero-section";
import { useSession } from "@/shared/model/session";
import { Component as ProjectsListPage } from "@/features/project-list/projects-list.page";

function HomePage() {
  const { session } = useSession();
  if (session) {
    return <ProjectsListPage />;
  }
  return (
    <>
      <main className="container mx-auto min-h-screen">
        <HeroSection className="mt-[200px]" />
        <ViewSection className="mt-[200px]" />
        <CtaSection className="mt-[100px]" />
      </main>
      <Footer className="mt-50" />
    </>
  );
}

export const Component = HomePage;
