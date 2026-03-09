import ExploreBtn from "@/components/ExploreBtn"
import EventCard from "@/components/EventCard"
import { time } from "console"
import { events } from "@/lib/constants"

const page = () => {
  return (
    <>
      <section className="text-center">
        <h1>The Hub For Every Dev <br/>That You Can't Miss</h1>
        <p className="text-center mt-5">Hackethons , Meetups and Conferences , All in one place.</p>
        <ExploreBtn />

        <div className="mt-20 space-y-7">
          <h3> Featured Events </h3>
          <ul className="events">

            {events.map((event) => (
              <EventCard key={event.title} title={event.title} image={event.image} location={event.location} slug={event.slug} date={event.date} time={event.time} />
            ))}

          </ul>
        </div>
      </section>
    </>
  )
}

export default page