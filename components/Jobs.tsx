import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <section className="bg-slate-200  rounded-xl">
      <div className="flex flex-col gap-5 container mx-auto px-6 py-4">
        <h2 className="">Recent Jobs</h2>
        <JobRow/>
        <JobRow/>
        <JobRow/>
        <JobRow/>
      </div>
    </section>
  );
};
export default Jobs;
