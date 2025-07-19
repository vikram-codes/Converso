import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const receentSessionsCompanions = await getRecentSessions(10);
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        {companions.map((companions) => (
          <CompanionCard
            key={companions.id}
            id={companions.id}
            name={companions.name}
            topic={companions.topic}
            subject={companions.subject}
            duration={companions.duration}
            color={getSubjectColor(companions.subject)}
          />
        ))}
        {/* <CompanionCard
          id="1"
          name="Neury the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
          name="Verba the Vocabulary Builder"
          topic="English Literature"
          subject="English"
          duration={30}
          color="#bde7ff"
        /> */}
      </section>
      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={receentSessionsCompanions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
