import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Sticky from "@/components/Sticky";
import Background from "@/components/Background";
import Card from "@/components/Card";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Hero />
      <Courses />
      <Sticky />
      <Background />
      <Card />
      <Instructors/>
    </div>
  );
}
