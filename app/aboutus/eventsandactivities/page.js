import Header from "@/private/MainPageComponents/header";
import Activities from "@/private/activitiesAndproject/activities";
import Events from "@/private/activitiesAndproject/events";
import Footer from "@/private/footer/footer";
const EventsAndActivities = () => {
    return(
        <div>
            <Header />
            <br /><br />
            <Activities />
        <Footer />

            {/* <Events /> */}
        </div>
    )
}

export default EventsAndActivities;