import React, { useState, Axios } from "react";
import { useNavigate } from "react-router-dom";

function Selection() {
  const chyear = new Date().getFullYear();
  //form elements
  const [Year, setYear] = useState("");
  const [Semester, setSemester] = useState("");
  const [Course, setCourse] = useState("");
  const [Project, setProject] = useState("");
  const[Review,SetReview]=useState("");
  const navigate=  useNavigate();
  const Handle = async (e) => {
    e.preventDefault();
    const url = "";
    console.log(Year, Semester, Course, Project,Review);
    const data = await Axios(url, { Year, Semester, Course, Project ,Review});
    console.log(data);
  };
  const HandleReset = (e) => {
    setYear("");
    setSemester("");
    setCourse("");
    setProject("");
    SetReview("");
  };
  //    let navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center mt-32 sm:mt-20">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <form action="post" onSubmit={(e) => Handle(e)}>
                <table className="min-w-full text-center sm:text-sm">
                  <tbody>
                    <tr>
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Year">Year</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <select
                          className="block w-full border  required"
                          name="Year"
                          onChange={(e) => setYear(e.target.value)}
                          value={Year}
                        >
                          <option value="" disabled={true}>
                            -SELECT-
                          </option>
                          <option value={chyear - 2}>{chyear - 2}</option>
                          <option value={chyear - 1}>{chyear - 1}</option>
                          <option value={chyear}>{chyear}</option>
                          <option value={chyear + 1}>{chyear + 1}</option>
                          <option value={chyear + 2}>{chyear + 2}</option>
                        </select>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                        <label htmlFor="Semester">Semester</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <select
                          className="block w-full border  w-full"
                          name="Semester"
                          value={Semester}
                          onChange={(e) => setSemester(e.target.value)}
                        >
                          <option value="" disabled={true}>
                          -SELECT-
                          </option>
                          <option value="Fall Sem">Fall Semester</option>
                          <option value="Win Sem">Winter Semester</option>
                        </select>
                      </td>
                    </tr>
                    <tr className="bg-white ">
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                        <label htmlFor="Course">Course</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <select
                          className="block w-full border "
                          name="Course"
                          value={Course}
                          onChange={(e) => setCourse(e.target.value)}
                        >
                          <option value="" disabled={true}>
                          -SELECT-
                          </option>
                          <option value="Web Tech">Web Tech</option>
                        </select>
                      </td>
                    </tr>

                    <tr className="bg-white">
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                        <label htmlFor="Project">Project Type</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <select
                          className="block w-full border"
                          name="Project"
                          value={Project}
                          onChange={(e) => setProject(e.target.value)}
                        >
                          <option value="" disabled={true}>-SELECT-</option>
                          <option value="Inhouse" selected>
                            Inhouse
                          </option>
                          <option value="Internship" selected>
                            Internship
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                        <label htmlFor="Review">Number of Reviews</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <input
                          placeholder="Reviews"
                          className="black border"
                          id="Review"
                          name="Review"
                          onChange={(e) => SetReview(e.target.value)}
                          value={Review}
                        />
                        </td>
                        </tr>
                    <tr className="bg-white ">
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                        <button
                          type="submit"
                          className="nav-col hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigate('/marksconfiguration')}>
                          Submit
                        </button>
                       
                      </td>
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                        <button
                          className="nav-col hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                          onClick={(e) => HandleReset(e)}
                        >
                          Reset
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Selection;
