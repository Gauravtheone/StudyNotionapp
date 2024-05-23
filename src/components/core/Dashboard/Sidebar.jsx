import { useState } from "react"
import { VscSignOut, VscSettingsGear, VscMenu } from "react-icons/vsc" // Import VscMenu icon
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sidebarLinks } from "../../../data/dashboard-links"
import { logout } from "../../../services/operations/authAPI"
import ConfirmationModal from "../../common/ConfirmationModal"
import SidebarLink from "./SidebarLink"

export default function Sidebar() {
    const { user, loading: profileLoading } = useSelector(
        (state) => state.profile
    )
    const { loading: authLoading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // State to track the visibility of the sidebar
    const [isSidebarVisible, setIsSidebarVisible] = useState(true)
    
    // State to keep track of confirmation modal
    const [confirmationModal, setConfirmationModal] = useState(null)

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarVisible((prevVisible) => !prevVisible)
    }

    // Display spinner while loading
    if (profileLoading || authLoading) {
        return (
            <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
                <div className="spinner"></div>
            </div>
        )
    }

    return (
        <>
        <div>
            {/* Button to toggle sidebar visibility */}
            <button
                onClick={toggleSidebar}
                className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-white bg-richblack-800"
            >
                <VscMenu className="text-lg" />
                <span>{isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}</span>
            </button>
            
            {/* Conditionally render the sidebar based on visibility state */}
            {isSidebarVisible && (
                <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">
                    <div className="flex flex-col">
                        {sidebarLinks.map((link) => {
                            if (link.type && user?.accountType !== link.type) return null
                            return (
                                <SidebarLink key={link.id} link={link} iconName={link.icon} />
                            )
                        })}
                    </div>
                    <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700" />
                    <div className="flex flex-col">
                        <SidebarLink
                            link={{ name: "Settings", path: "/dashboard/settings" }}
                            iconName="VscSettingsGear"
                        />
                        <button
                            onClick={() =>
                                setConfirmationModal({
                                    text1: "Are you sure?",
                                    text2: "You will be logged out of your account.",
                                    btn1Text: "Logout",
                                    btn2Text: "Cancel",
                                    btn1Handler: () => dispatch(logout(navigate)),
                                    btn2Handler: () => setConfirmationModal(null),
                                })
                            }
                            className="px-8 py-2 text-sm font-medium text-richblack-300"
                        >
                            <div className="flex items-center gap-x-2">
                                <VscSignOut className="text-lg" />
                                <span>Logout</span>
                            </div>
                        </button>
                    </div>
                </div>
            )}
            
            {/* Render confirmation modal if it's active */}
            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
        </>
    )
}
