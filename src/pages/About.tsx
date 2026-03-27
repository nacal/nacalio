import ProfileCard from "../components/ProfileCard"

export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center gap-8 overflow-hidden px-4 pt-8 md:flex-row md:items-start md:justify-center md:gap-12 md:px-6">
      <div className="shrink-0 scale-75 md:scale-100 origin-top">
        <ProfileCard
          name="nacal"
          title="Software Engineer"
          avatarUrl="/profile.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={false}
          behindGlowColor="rgba(156, 163, 175, 0.3)"
          behindGlowEnabled
          innerGradient="linear-gradient(145deg, rgba(31,41,55,0.6) 0%, rgba(75,85,99,0.3) 100%)"
        />
      </div>
      <div className="w-full max-w-md px-2 pb-20 md:pt-8">
        <h2 className="mb-4 text-2xl font-bold">
          <span className="bg-black px-2 py-1 text-white box-decoration-clone">
            About
          </span>
        </h2>
        <p className="leading-loose">
          <span className="bg-black px-2 py-1 text-gray-200 box-decoration-clone">
            Senior Engineer at GMO Pepabo, Inc. since 2022. Currently leading
            development on "Lolipop! for Gamers" — handling everything from
            requirements definition, roadmap planning, and stakeholder
            coordination to hands-on architecture and implementation across the
            full stack (Next.js / TypeScript on the frontend, Go on the
            backend).
          </span>
        </p>
        <p className="mt-4 leading-loose">
          <span className="bg-black px-2 py-1 text-gray-200 box-decoration-clone">
            My core strength lies in frontend engineering, with a deep
            commitment to the quality of interfaces that users directly interact
            with. I specialize in translating complex technical constraints into
            clear, intuitive information architecture and UI design.
          </span>
        </p>
      </div>
    </div>
  )
}
