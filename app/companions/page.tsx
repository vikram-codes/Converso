import { getUserCompanions } from "@/lib/actions/companion.action";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Cta from "@/components/CTA";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  // const filters = await searchParams;
  // const subject = filters.subject ? filters.subject : "";
  // const topic = filters.topic ? filters.topic : "";
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id);
  console.log(companions);

  return (
    <main className="flex flex-col items-center w-full">
      <section className="flex justify-between items-center gap-4 w-full max-w-5xl mx-auto max-sm:flex-col">
        <h1 className="text-2xl font-bold">Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid w-full max-w-5xl mx-auto mt-6">
        {!companions.length ? (
          <div className="flex justify-center items-center min-h-[200px] w-full">
            <Cta />
          </div>
        ) : (
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
