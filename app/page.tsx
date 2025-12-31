import Image from "next/image"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"

export default function Home() {
  return (
    <main className="w-full bg-white text-gray-800">
      {/* ========== Navbar ========== */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-2xl font-bold text-teal-600">Olan</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-teal-600">Home</a>
            <a href="#" className="hover:text-teal-600">Courses</a>
            <a href="#" className="hover:text-teal-600">About</a>
            <a href="#" className="hover:text-teal-600">Blog</a>
            <a href="#" className="hover:text-teal-600">Contact</a>
          </nav>
          <Button className="bg-teal-500 hover:bg-teal-600 rounded-full">Sign Up</Button>
        </div>
      </header>

      {/* ========== Hero ========== */}
      <section className="bg-gradient-to-r from-teal-50 via-white to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Education That <br /> Moves With You — <br /> Anytime, Anywhere.
            </h1>
            <p className="text-gray-600 max-w-lg mb-8">
              Learn from global experts and build real-world skills for your future career.
            </p>
            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Browse Courses</Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-student.png"
              alt="Student"
              width={420}
              height={520}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* ========== Why Choose Olan ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Thousands Choose Olan</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Expert Tutors", "Flexible Learning", "Career Focused", "Trusted Certificates"].map(
              (item, i) => (
                <Card key={i} className="text-center">
                  <CardContent>
                    <div className="text-teal-500 text-xl mb-2">✓</div>
                    <p className="font-medium">{item}</p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== Learning Paths ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Explore Our Most-Loved Learning Paths</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {["Data Science", "UI/UX Design", "Business", "Software Development"].map(
              (item, i) => (
                <Card key={i}>
                  <CardContent>
                    <h3 className="font-semibold mb-2">{item}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Structured roadmap from beginner to advanced.
                    </p>
                    <Button size="sm">Explore</Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* ========== Platform Highlight ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/platform.png"
            alt="Platform"
            width={500}
            height={420}
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">One Platform. Infinite Learning Possibilities.</h2>
            <p className="text-gray-600 mb-6">
              Learn anytime with bite-sized lessons, expert mentors, and global community.
            </p>
            <ul className="space-y-3 text-sm">
              <li>✓ Personalized learning paths</li>
              <li>✓ Industry-recognized certificates</li>
              <li>✓ Community & mentor support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== Stats ========== */}
      <section className="py-16 bg-gradient-to-r from-teal-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-teal-600">6.8M+</p>
            <p className="text-sm text-gray-600">Learners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-600">7.5K+</p>
            <p className="text-sm text-gray-600">Courses</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-600">120+</p>
            <p className="text-sm text-gray-600">Tutors</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-teal-600">4.9</p>
            <p className="text-sm text-gray-600">Avg Rating</p>
          </div>
        </div>
      </section>

      {/* ========== Courses Preview ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Affordable Learning. Real-World Skills.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <Image src={`/course-${i}.png`} alt="Course" width={400} height={240} />
                <CardContent>
                  <h3 className="font-semibold mb-1">Course Title</h3>
                  <p className="text-sm text-gray-600">Short course description</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Instructors ========== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Your Learning Guides</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="text-center">
                <CardContent>
                  <Image
                    src={`/teacher-${i}.png`}
                    alt="Teacher"
                    width={120}
                    height={120}
                    className="mx-auto rounded-full mb-4"
                  />
                  <h4 className="font-semibold">Instructor Name</h4>
                  <p className="text-sm text-gray-600">Expert Field</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 bg-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Kickstart Your Learning Journey</h2>
          <p className="mb-8">Build the career you deserve with expert-led courses.</p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100">Join Now</Button>
        </div>
      </section>

      {/* ========== Blog ========== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Insights & Ideas From the World of Learning</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <Image src={`/blog-${i}.png`} alt="Blog" width={400} height={240} />
                <CardContent>
                  <h3 className="font-semibold mb-2">Blog Title</h3>
                  <p className="text-sm text-gray-600">Short blog description</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Footer ========== */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Olan</h3>
            <p className="text-sm">Modern online learning platform.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>Courses</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>Design</li>
              <li>Development</li>
              <li>Business</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">Newsletter</h4>
            <input
              className="w-full rounded-md px-3 py-2 text-gray-900"
              placeholder="Email address"
            />
          </div>
        </div>
        <p className="text-center text-xs mt-10">© 2025 Olan. All rights reserved.</p>
      </footer>
    </main>
  )
}

