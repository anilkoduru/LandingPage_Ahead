import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Privacy from "@/components/Privacy";
import Work_with_us from "@/components/Work_with_us";
import Vacancies from "@/components/Vacancies";
import Random from "@/components/Random";
import Navbar from "@/components/Navbar";
import Social_skills from "@/components/Social_skills";
import Self_improvement from "@/components/Self_improvement";
import Familiar from "@/components/Familiar";
import Meet from "@/components/Meet";
import Master from "@/components/Master";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body>
        {/* {children} */}
        <Navbar />
        <Master />
        <Random
          left="EQ beats IQ"
          middle="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships."
          right="They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year."
        />
        <Familiar />
        <Meet />
        <Self_improvement />
        <Random
          left="Be the best you with EQ"
          middle="Not having your own emotions under control might be holding you back."
          right="Additionally, not understanding those of others stops you from being parent, friend you can be."
        />
        <Social_skills />
        <Privacy />
        <Work_with_us />
        <Vacancies />
        <Footer />
      </body>
    </html>
  );
}
