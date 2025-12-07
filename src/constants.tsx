import { 
  BookOpen, 
  Code, 
  GraduationCap, 
  Globe, 
  PenTool, 
  Calculator 
} from 'lucide-react';
import { NavItem, ServiceItem, StatItem, Testimonial, BlogPost } from './types';

export const COMPANY_INFO = {
  name: "Home Edu Tuition",
  email: "homeedutuition@gmail.com",
  phone: "+233 54 346 2378",
  address: "McCarthy Hill, Accra, Ghana",
  tagline: "Unlock Your Child's Potential with Expert Home Tuition"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Apply as Tutor', href: '/tutor-application' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'cambridge',
    title: 'Cambridge Curriculum',
    description: 'Personalized tutoring for Cambridge Primary, Secondary, IGCSE, AS & A Level tailored to help your child excel internationally.',
    longDescription: `
      <p>Our Cambridge Curriculum program is designed to provide world-class education right at your doorstep. We understand the rigor and high standards expected by the Cambridge Assessment International Education (CAIE).</p>
      <p>Our tutors are well-versed in the latest syllabus updates and assessment techniques for:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Cambridge Primary:</strong> Building a strong foundation in English, Math, and Science.</li>
        <li><strong>Cambridge Lower Secondary:</strong> Preparing students for the transition to IGCSE.</li>
        <li><strong>IGCSE (O Level):</strong> Intensive exam preparation, past question solving, and concept mastery.</li>
        <li><strong>AS & A Level:</strong> Advanced subject specialization for university preparedness.</li>
      </ul>
      <p class="mt-4">We focus on developing critical thinking, problem-solving, and independent research skills that are central to the Cambridge philosophy.</p>
    `,
    features: ['Past Paper Practice', 'Syllabus Coverage', 'Exam Technique Mastery'],
    icon: Globe,
  },
  {
    id: 'ges',
    title: 'GES Curriculum',
    description: 'Expert preparation for BECE and WASSCE with a strong focus on core subjects, ensuring deep understanding and exam readiness.',
    longDescription: `
      <p>We offer comprehensive support for the Ghana Education Service (GES) curriculum, ensuring students are not just passing exams but truly understanding the material.</p>
      <p>Our approach covers:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Upper Primary (BS1 - BS6):</strong> Solidifying literacy and numeracy skills.</li>
        <li><strong>JHS (BECE Prep):</strong> Intensive revision, mock exams, and topic-by-topic breakdowns to ensure top grades in the Basic Education Certificate Examination.</li>
        <li><strong>SHS (WASSCE Prep):</strong> Specialized tutoring for Core and Elective subjects to secure admission into top universities.</li>
      </ul>
      <p class="mt-4">Our tutors are experienced with the WAEC marking schemes and grading systems, giving your child the competitive edge they need.</p>
    `,
    features: ['BECE & WASSCE Focus', 'WAEC Standard Grading', 'Core & Elective Support'],
    icon: BookOpen,
  },
  {
    id: 'ib',
    title: 'IB Programme',
    description: 'Specialized training for IB PYP, MYP, and IBDP students, focusing on inquiry-based learning and research skills.',
    longDescription: `
      <p>The International Baccalaureate (IB) programme demands a unique approach to learning. Our tutors are trained to support the inquiry-based nature of the IB curriculum.</p>
      <p>We provide support for:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li><strong>PYP (Primary Years Programme):</strong> Fostering curiosity and foundational concepts.</li>
        <li><strong>MYP (Middle Years Programme):</strong> Connecting classroom learning to the real world.</li>
        <li><strong>DP (Diploma Programme):</strong> Rigorous academic support for HL and SL subjects, including assistance with Internal Assessments (IAs), Extended Essays (EE), and Theory of Knowledge (TOK).</li>
      </ul>
    `,
    features: ['Inquiry-Based Learning', 'IA & EE Support', 'Global Perspective'],
    icon: GraduationCap,
  },
  {
    id: 'coding',
    title: 'Coding & Tech',
    description: 'Modern tech skills for the future. We introduce students to programming logic, web development basics, and computational thinking.',
    longDescription: `
      <p>In today's digital age, coding is a new literacy. Our Coding & Tech program is tailored to introduce young minds to the world of technology in a fun and engaging way.</p>
      <p>Modules include:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Scratch Programming:</strong> For beginners to understand logic and animation.</li>
        <li><strong>Web Development:</strong> HTML, CSS, and JavaScript for building websites.</li>
        <li><strong>Python Basics:</strong> Introduction to one of the world's most popular programming languages.</li>
        <li><strong>Computational Thinking:</strong> Problem-solving skills that apply to all subjects.</li>
      </ul>
    `,
    features: ['Hands-on Projects', 'Game Development', 'Web Design Basics'],
    icon: Code,
  },
  {
    id: 'test-prep',
    title: 'Standardized Test Prep',
    description: 'Rigorous training for SAT, GRE, GMAT, and TOEFL to help students gain confidence and achieve top scores.',
    longDescription: `
      <p>Dreaming of studying abroad? Our Standardized Test Prep services are designed to help you achieve the scores you need for international admissions.</p>
      <p>We offer specialized coaching for:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li><strong>SAT:</strong> Math, Evidence-Based Reading, and Writing.</li>
        <li><strong>GRE/GMAT:</strong> Quantitative and Verbal reasoning for graduate school admissions.</li>
        <li><strong>TOEFL/IELTS:</strong> English proficiency test preparation.</li>
      </ul>
      <p class="mt-4">Our program includes diagnostic tests, personalized study plans, and full-length practice exams to track progress.</p>
    `,
    features: ['Mock Exams', 'Score Improvement Strategies', 'Study Abroad Guidance'],
    icon: Calculator,
  },
  {
    id: 'projects',
    title: 'School Project Support',
    description: 'Daily or weekly academic assistance to complete homework, assignments, and complex school projects with accuracy.',
    longDescription: `
      <p>School projects and homework can be overwhelming. Our Project Support service ensures your child stays on top of their workload without the stress.</p>
      <p>We assist with:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Daily Homework Help:</strong> Ensuring assignments are completed accurately and on time.</li>
        <li><strong>Research Projects:</strong> Guiding students on how to research, structure, and present their work.</li>
        <li><strong>Science Experiments:</strong> Practical assistance with school science projects.</li>
        <li><strong>Art & Creative Tasks:</strong> Helping unleash creativity for school requirements.</li>
      </ul>
    `,
    features: ['Daily Guidance', 'Research Assistance', 'Stress-Free Learning'],
    icon: PenTool,
  },
];

export const STATS: StatItem[] = [
  { value: '60', label: 'Happy Clients', suffix: '+' },
  { value: '70', label: 'Students Taught', suffix: '+' },
  { value: '90', label: 'Projects Completed', suffix: '+' },
  { value: '100', label: 'Success Rate', suffix: '%' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah A.",
    role: "Parent",
    content: "The transformation in my son's attitude towards Math has been incredible. The tutor is patient and explains concepts clearly."
  },
  {
    id: 2,
    name: "Kwame O.",
    role: "Student (IGCSE)",
    content: "I was struggling with Physics, but Home Edu Tuition helped me understand the fundamentals. I aced my exams!"
  },
  {
    id: 3,
    name: "Mrs. Mensah",
    role: "Parent",
    content: "Professional, punctual, and very knowledgeable. Highly recommend them for anyone looking for serious academic support."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'why-homeschool-tutors-matter',
    title: 'Why Homeschool Tutors Matter',
    excerpt: 'Homeschooling offers the freedom to tailor education to a child’s specific needs, but it can be challenging for parents to manage all subjects.',
    date: 'Aug 02, 2025',
    author: 'Home Edu Tuition',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1427504743055-e99aa7616bd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>Homeschooling offers the freedom to tailor education to a child’s specific needs, but it can be challenging for parents to manage all subjects on their own. This is where professional homeschool tutors come in.</p>
      
      <h3>1. Personalized Learning Pace</h3>
      <p>Every child learns differently. A tutor can speed up for topics the child grasps quickly and slow down for more complex concepts, ensuring no gaps in understanding.</p>

      <h3>2. Specialized Knowledge</h3>
      <p>As students advance to higher grades, subjects like Physics, Calculus, or French become more specialized. Tutors bring expert knowledge that parents might not possess.</p>

      <h3>3. Accountability and Structure</h3>
      <p>Tutors provide a structured schedule and external accountability, which can help keep homeschooling on track and disciplined.</p>

      <p>At Home Edu Tuition, we partner with homeschooling families to provide that extra layer of expertise and support, ensuring a well-rounded education for your child.</p>
    `
  },
  {
    id: 'qualities-of-best-tutors',
    title: 'Qualities of the Best Homeschool Tutors',
    excerpt: 'Home-based and online learning are transforming education in Ghana. Here is what to look for when hiring a tutor.',
    date: 'Nov 16, 2024',
    author: 'Home Edu Tuition',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>Finding the right tutor can make or break a student's academic journey. It's not just about qualifications; it's about connection and teaching style.</p>

      <h3>1. Patience and Empathy</h3>
      <p>The ability to understand a student's frustration and guide them through it calmly is the hallmark of a great tutor.</p>

      <h3>2. Adaptability</h3>
      <p>Great tutors adapt their teaching methods to suit the student's learning style—whether visual, auditory, or kinesthetic.</p>

      <h3>3. Passion for the Subject</h3>
      <p>Enthusiasm is contagious. A tutor who loves their subject can ignite a similar passion in their students.</p>

      <p>Our recruitment process at Home Edu Tuition screens specifically for these soft skills alongside academic prowess.</p>
    `
  },
  {
    id: 'exam-prep-tips',
    title: '5 Tips for WASSCE & IGCSE Success',
    excerpt: 'Preparing for major exams can be stressful. Use these proven strategies to maximize your study time and boost your grades.',
    date: 'Jan 10, 2025',
    author: 'Home Edu Tuition',
    category: 'Study Tips',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>Success in WASSCE or IGCSE isn't just about hard work; it's about working smart. Here are five tips to help you prepare.</p>

      <h3>1. Start Early</h3>
      <p>Don't wait until the last month. Consistent study over a long period beats cramming every time.</p>

      <h3>2. Practice with Past Questions</h3>
      <p>Understanding the exam format and the way questions are phrased is half the battle. Regular practice builds familiarity and speed.</p>

      <h3>3. Create a Study Timetable</h3>
      <p>Allocate specific times for specific subjects and stick to it. Balance hard subjects with easier ones to avoid burnout.</p>

      <h3>4. Take Care of Yourself</h3>
      <p>Sleep, hydration, and nutrition play a huge role in cognitive function. Don't neglect your health during exam season.</p>

      <h3>5. Get Help When Stuck</h3>
      <p>Don't struggle in silence. If you don't understand a topic, ask a teacher, a friend, or hire a tutor to explain it differently.</p>
    `
  }
];