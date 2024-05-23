import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchInstructorCourses } from '../../../../services/operations/courseDetailsAPI';
import { getInstructorData } from '../../../../services/operations/profileAPI';
import InstructorChart from './InstructorChart';
import { Link } from 'react-router-dom';

const Instructor = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const [loading, setLoading] = useState(false);
    const [instructorData, setInstructorData] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const getCourseDataWithStats = async () => {
            setLoading(true);
            
            const instructorApiData = await getInstructorData(token);
            const result = await fetchInstructorCourses(token);

            if (instructorApiData.length)
                setInstructorData(instructorApiData);

            if (result) {
                setCourses(result);
            }
            setLoading(false);
        };
        getCourseDataWithStats();
    }, []);

    const totalAmount = instructorData?.reduce((acc, curr) => acc + curr.totalAmountGenerated, 0);
    const totalStudents = instructorData?.reduce((acc, curr) => acc + curr.totalStudentsEnrolled, 0);

    return (
        <div className="p-6 text-white bg-gray-800 rounded-lg">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Hi {user?.firstName}</h1>
                <p className="text-gray-400">Let's start something new</p>
            </div>

            {loading ? (
                <div className="flex justify-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent rounded-full"></div>
                </div>
            ) : courses.length > 0 ? (
                <div>
                    <div className="flex flex-col lg:flex-row lg:gap-8 mb-6">
                        {/* InstructorChart Component */}
                        <InstructorChart courses={instructorData} className="lg:flex-1" />

                        {/* Statistics Section */}
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg lg:w-1/3">
                            <h2 className="text-xl font-bold mb-4">Statistics</h2>
                            {/* Statistics Items */}
                            <div className="space-y-4">
                                {/* Total Courses */}
                                <div className="flex justify-between items-center border-b pb-2">
                                    <p className="text-gray-300">Total Courses:</p>
                                    <p className="text-white">{courses.length}</p>
                                </div>

                                {/* Total Students */}
                                <div className="flex justify-between items-center border-b pb-2">
                                    <p className="text-gray-300">Total Students:</p>
                                    <p className="text-white">{totalStudents}</p>
                                </div>

                                {/* Total Income */}
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-300">Total Income:</p>
                                    <p className="text-white">Rs {totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Your Courses Section */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-xl font-bold">Your Courses</p>
                            <Link to="/dashboard/my-courses" className="text-blue-500 font-medium">View all</Link>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {courses.slice(0, 3).map((course) => (
                                <div key={course.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.courseName}
                                        className="w-full h-32 object-cover rounded-md"
                                    />
                                    <div className="mt-2">
                                        <p className="text-lg font-semibold">{course.courseName}</p>
                                        <div className="flex justify-between mt-1 text-sm text-gray-400">
                                            <p>{course.studentsEnrolled.length} students</p>
                                            <span>|</span>
                                            <p>Rs {course.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <p>You have not created any courses yet</p>
                    <Link to="/dashboard/addCourse" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md">Create a Course</Link>
                </div>
            )}
        </div>
    );
};

export default Instructor;
