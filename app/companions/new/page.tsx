import CompanionForm from "@/components/CompanionForm";

function NewCompanion() {
  return (
    <main className="min-lg:w-1/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
}

export default NewCompanion;
