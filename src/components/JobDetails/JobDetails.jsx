import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { PiSubtitles } from "react-icons/pi";
import { LuPhone,LuMail } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job=>job.id === idInt)
    console.log(job);

    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast.success('You have applied successfully!');
    }

    return (
        <div>
            <h2>Job details of  : {id}</h2>
            <div className=" grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-3 p-1">
                    <p> <span className="font-bold">Job Description :</span> {job.job_description}</p>
                    <p> <span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className="font-bold">Educational Requirements:</p>
                    <p>{job.educational_requirements}</p>
                    <p className="font-bold">Experiences:</p>
                    <p>{job.experiences}</p>
                </div>
                <div className="border p-1">

                <h2 className=" text-xl border-b my-2">Job Details</h2>
                <p className="flex gap-2"><AiOutlineDollarCircle className="text-2xl" /> Salary:{job.salary}</p>
                <p className="flex gap-2 mt-2"><PiSubtitles className="text-2xl" />Job Title: {job.job_title}</p>
                <h2 className="border-b my-2 text-xl">Contact Information</h2>
                <p className="flex gap-2 mt-2"><LuPhone className="text-2xl" />Phone: {job.contact_information.phone}</p>
                <p className="flex gap-2 mt-2"><LuMail className="text-2xl" />Email: {job.contact_information.email}</p>
                <p className="flex gap-2 mt-2"><SlLocationPin className="text-4xl" />Address: {job.contact_information.address}</p>
                <button onClick={handleApplyJob} className="btn btn-primary w-full mt-2">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;