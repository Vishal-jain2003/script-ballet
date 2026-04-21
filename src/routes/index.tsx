import { createFileRoute } from "@tanstack/react-router";
import { SlideShow } from "@/components/SlideShow";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <SlideShow />;
}
