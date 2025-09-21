"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Bell,
  Settings,
  User,
  TrendingUp,
  MessageCircle,
  Download,
  Share2,
  Heart,
  Bookmark,
} from "lucide-react"

// Typing animation hook
const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

// Animated particles component
const AnimatedParticles = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent/20 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

// Animated space rocket component
// AnimatedRocket component removed entirely

// Navigation component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div className="text-2xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
          FormationPro
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-colors">
            Fonctionnalités
          </a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
            Témoignages
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Tarifs
          </a>
          <Button variant="outline" className="mr-2 bg-transparent">
            Connexion
          </Button>
          <Button>Commencer maintenant</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden bg-background border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary">
              Fonctionnalités
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary">
              Témoignages
            </a>
            <a href="#pricing" className="block text-foreground hover:text-primary">
              Tarifs
            </a>
            <div className="space-y-2 pt-4">
              <Button variant="outline" className="w-full bg-transparent">
                Connexion
              </Button>
              <Button className="w-full">Commencer maintenant</Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

// Interactive Dashboard Component
const InteractiveDashboard = () => {
  const [progress, setProgress] = useState(0)
  const [notifications, setNotifications] = useState(0)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [likes, setLikes] = useState(42)
  const [bookmarks, setBookmarks] = useState(12)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [chartData, setChartData] = useState([20, 45, 30, 60, 80, 65, 90])
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)
    
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 100)

    const notificationInterval = setInterval(() => {
      setNotifications((prev) => (prev >= 5 ? 0 : prev + 1))
    }, 2000)

    const chartInterval = setInterval(() => {
      setChartData((prev) => prev.map(() => Math.floor(Math.random() * 100)))
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearInterval(notificationInterval)
      clearInterval(chartInterval)
    }
  }, [])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    setBookmarks((prev) => (isBookmarked ? prev - 1 : prev + 1))
  }

  return (
    <div className="relative mx-auto rounded-2xl shadow-2xl max-w-4xl w-full bg-slate-900 p-4 opacity-90">
      <motion.div
        className="absolute -z-10 left-0 top-1/2 opacity-90"
        animate={{
          y: [-windowDimensions.height / 2, -windowDimensions.height - 200],
          x: [0, windowDimensions.width],
          rotate: [0, 15, 10],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/image-42ObvHJ6Hj2bldH10cm3uSdvOyJhBa.png"
          alt="Cartoon Rocket"
          className="w-24 h-24 opacity-40" // increased transparency from 90% to 40%
        />
      </motion.div>

      {/* Computer Frame */}
      <div className="bg-slate-800 rounded-xl p-6 relative overflow-hidden">
        {/* Screen Content */}
        <div className="bg-white rounded-lg p-6 min-h-[500px] relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-bold text-slate-800">FormationPro</h3>
              <div className="flex space-x-2">
                {["dashboard", "courses", "progress"].map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                      activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <motion.button
                className="relative p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bell className="h-4 w-4 text-gray-600" />
                {notifications > 0 && (
                  <motion.span
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {notifications}
                  </motion.span>
                )}
              </motion.button>
              <motion.button
                className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <Settings className="h-4 w-4 text-gray-600" />
              </motion.button>
              <motion.div
                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <User className="h-4 w-4 text-white" />
              </motion.div>
            </div>
          </div>

          {activeTab === "dashboard" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Cours Terminés", value: "12", icon: BookOpen, color: "blue" },
                  { label: "Heures d'Étude", value: "24h", icon: TrendingUp, color: "green" },
                  { label: "Certificats", value: "3", icon: Award, color: "purple" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`bg-${stat.color}-50 rounded-lg p-4 cursor-pointer`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <motion.p
                          className={`text-2xl font-bold text-${stat.color}-600`}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          {stat.value}
                        </motion.p>
                      </div>
                      <stat.icon className={`h-8 w-8 text-${stat.color}-500`} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Chart */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Progression Hebdomadaire</h4>
                <div className="flex items-end space-x-2 h-32">
                  {chartData.map((value, index) => (
                    <motion.div
                      key={index}
                      className="bg-blue-500 rounded-t cursor-pointer hover:bg-blue-600 transition-colors"
                      style={{ width: "20px" }}
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "courses" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="space-y-4">
                {[
                  { title: "React Avancé", progress: progress, instructor: "Marie Dubois" },
                  { title: "JavaScript ES6", progress: 75, instructor: "Pierre Martin" },
                  { title: "Node.js Backend", progress: 45, instructor: "Sophie Laurent" },
                ].map((course, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-semibold">{course.title}</h5>
                      <div className="flex space-x-2">
                        <motion.button
                          onClick={handleLike}
                          className={`p-1 rounded ${isLiked ? "text-red-500" : "text-gray-400"}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
                        </motion.button>
                        <motion.button
                          onClick={handleBookmark}
                          className={`p-1 rounded ${isBookmarked ? "text-blue-500" : "text-gray-400"}`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
                        </motion.button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Par {course.instructor}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${course.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{course.progress}% terminé</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "progress" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Objectifs du Mois</h4>
                  <div className="space-y-3">
                    {[
                      { task: "Terminer React Avancé", completed: true },
                      { task: "Obtenir certification JS", completed: false },
                      { task: "Projet portfolio", completed: false },
                    ].map((goal, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className={`w-4 h-4 rounded border-2 ${
                            goal.completed ? "bg-green-500 border-green-500" : "border-gray-300"
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.8 }}
                        >
                          {goal.completed && <CheckCircle className="h-4 w-4 text-white" />}
                        </motion.div>
                        <span className={goal.completed ? "line-through text-gray-500" : ""}>{goal.task}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-800 mb-3">Activité Récente</h4>
                  <div className="space-y-2">
                    {[
                      { action: "Nouveau chapitre débloqué", time: "Il y a 2h", color: "blue" },
                      { action: "Quiz terminé avec succès", time: "Il y a 4h", color: "green" },
                      { action: "Nouveau badge obtenu", time: "Il y a 1j", color: "purple" },
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-2 bg-white rounded cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className={`w-2 h-2 bg-${activity.color}-500 rounded-full`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            <motion.button
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
              whileHover={{ scale: 1.1, rotate: -15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Download className="h-5 w-5" />
            </motion.button>
            <motion.button
              className="bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Share2 className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Enhanced Floating Elements */}
          <motion.div
            className="absolute top-4 right-4 w-4 h-4 bg-yellow-400 rounded-full cursor-pointer"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.5 }}
          />

          <motion.div
            className="absolute bottom-4 left-4 w-3 h-3 bg-pink-400 rounded-full cursor-pointer"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.5 }}
          />

          <motion.div
            className="absolute top-2 left-2 right-2 h-1 bg-gray-200 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ width: [`${progress}%`] }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        </div>

        {/* Screen Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl pointer-events-none" />
      </div>

      {/* Computer Base */}
      <div className="h-4 bg-slate-700 rounded-b-2xl mx-8" />
      <div className="h-2 bg-slate-600 rounded-b-xl mx-16" />
    </div>
  )
}

// Hero section
const HeroSection = () => {
  const typedText = useTypewriter("Développez vos compétences avec notre plateforme de formation en ligne", 30)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-background-learning.jpg"
          alt="Background d'apprentissage moderne"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 hero-gradient opacity-10"></div>
      </div>
      <AnimatedParticles />

      <motion.div
        className="absolute top-20 left-10 w-16 h-16 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <img src="/floating-book-icon.jpg" alt="Livre flottant" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        className="absolute top-32 right-20 w-12 h-12 opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <img
          src="/floating-graduation-cap.jpg"
          alt="Chapeau de graduation flottant"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-20 w-14 h-14 opacity-20"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <img src="/floating-lightbulb.jpg" alt="Ampoule flottante" className="w-full h-full object-contain" />
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Formation</span>Pro
          </h1>

          <div className="h-20 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {typedText}
              <motion.span
                className="inline-block w-1 h-6 bg-primary ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              />
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  Commencer maintenant
                </motion.span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-2xl bg-transparent">
                <Play className="mr-2 h-5 w-5" />
                Voir la démo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <InteractiveDashboard />
        </motion.div>
      </div>
    </section>
  )
}

// Features section
const FeaturesSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const features = [
    {
      icon: BookOpen,
      title: "Cours Interactifs",
      description: "Des contenus riches et engageants avec vidéos, quiz et exercices pratiques",
      stats: "500+ cours",
      color: "blue",
      personImage: "/student-learning-online.jpg",
      personAlt: "Étudiant suivant un cours en ligne interactif",
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Échangez avec d'autres apprenants et bénéficiez du support de nos experts",
      stats: "10k+ membres",
      color: "green",
      personImage: "/team-collaboration.jpg",
      personAlt: "Équipe collaborant ensemble",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Obtenez des certificats reconnus pour valoriser vos nouvelles compétences",
      stats: "50+ certificats",
      color: "purple",
      personImage: "/professional-achievement.jpg",
      personAlt: "Professionnel recevant une certification",
    },
  ]

  return (
    <section id="features" className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4" whileHover={{ scale: 1.05 }}>
            Pourquoi choisir <span className="text-primary">FormationPro</span> ?
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expérience d'apprentissage moderne et personnalisée pour tous vos besoins de formation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="perspective-1000 cursor-pointer"
            >
              <Card className="h-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredFeature === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div
                    className="mx-auto mb-4 relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-white shadow-lg">
                      <img
                        src={feature.personImage || "/placeholder.svg"}
                        alt={feature.personAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className={`mx-auto mb-4 p-4 bg-${feature.color}-500/10 rounded-2xl w-fit`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-500`} />
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  <motion.div
                    className={`text-sm font-semibold text-${feature.color}-600`}
                    animate={{ scale: hoveredFeature === index ? 1.1 : 1 }}
                  >
                    {feature.stats}
                  </motion.div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-base">{feature.description}</CardDescription>

                  <motion.div
                    className="mt-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredFeature === index ? 1 : 0,
                      y: hoveredFeature === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full bg-transparent hover:bg-primary hover:text-primary-foreground"
                    >
                      En savoir plus
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Développeuse Web",
      content: "FormationPro m'a permis de maîtriser React en quelques semaines. Les cours sont excellents !",
      rating: 5,
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "Pierre Martin",
      role: "Chef de Projet",
      content: "Une plateforme intuitive avec des formateurs de qualité. Je recommande vivement !",
      rating: 5,
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Sophie Laurent",
      role: "Designer UX",
      content: "Les certifications obtenues m'ont aidée à décrocher mon poste actuel. Merci FormationPro !",
      rating: 5,
      avatar: "/professional-woman-designer-avatar.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/testimonials-background-pattern.jpg"
          alt="Motif de fond pour témoignages"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <motion.div
        className="absolute top-10 left-10 w-8 h-8 opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <img src="/quote-icon.jpg" alt="Icône de citation" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-10 h-10 opacity-30"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ce que disent nos <span className="text-primary">apprenants</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de ceux qui ont transformé leur carrière avec FormationPro
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-2xl shadow-xl border-0 bg-card/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <img
                  src="/testimonial-card-pattern.jpg"
                  alt="Motif de carte témoignage"
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-8 text-center relative z-10">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing section
const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(1)
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Essentiel",
      price: isAnnual ? "24" : "29",
      period: "mois",
      description: "Parfait pour débuter votre apprentissage",
      features: ["Accès à 50+ cours", "Support communautaire", "Certificats de base", "Accès mobile"],
      popular: false,
      color: "blue",
      savings: isAnnual ? "Économisez 20%" : null,
    },
    {
      name: "Professionnel",
      price: isAnnual ? "47" : "59",
      period: "mois",
      description: "Idéal pour les professionnels ambitieux",
      features: [
        "Accès à tous les cours",
        "Support prioritaire",
        "Certificats avancés",
        "Projets pratiques",
        "Mentorat personnalisé",
      ],
      popular: true,
      color: "purple",
      savings: isAnnual ? "Économisez 25%" : null,
    },
    {
      name: "Entreprise",
      price: isAnnual ? "79" : "99",
      period: "mois",
      description: "Pour les équipes et organisations",
      features: [
        "Tout du plan Professionnel",
        "Gestion d'équipe",
        "Rapports détaillés",
        "Formation sur mesure",
        "Support dédié",
      ],
      popular: false,
      color: "green",
      savings: isAnnual ? "Économisez 30%" : null,
    },
  ]

  return (
    <section id="pricing" className="py-20 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/pricing-background-geometric.jpg"
          alt="Fond géométrique pour les prix"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <motion.div
        className="absolute top-20 left-5 w-12 h-12 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <img src="/money-icon.jpg" alt="Icône d'argent" className="w-full h-full object-contain" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-5 w-10 h-10 opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choisissez votre <span className="text-primary">plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Des tarifs transparents pour tous vos besoins de formation
          </p>

          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className={`text-sm ${!isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Mensuel
            </span>
            <motion.button
              className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? "bg-primary" : "bg-gray-300"}`}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-sm ${isAnnual ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Annuel
            </span>
            {isAnnual && (
              <motion.span
                className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                Jusqu'à 30% d'économie
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedPlan(index)}
              className={`relative cursor-pointer ${plan.popular ? "z-10" : ""}`}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 rounded-full">Recommandé</Badge>
                </motion.div>
              )}

              {plan.savings && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {plan.savings}
                </motion.div>
              )}

              <Card
                className={`h-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden ${
                  selectedPlan === index
                    ? `border-${plan.color}-500 bg-${plan.color}-50/50`
                    : plan.popular
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card/50 backdrop-blur-sm border-transparent"
                }`}
              >
                <div className="absolute inset-0 opacity-5">
                  <img
                    src={`/pricing-card-${plan.color}-pattern.jpg`}
                    alt={`Motif ${plan.color} pour carte de prix`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <motion.span
                      className={`text-4xl font-bold text-${plan.color}-600`}
                      animate={{ scale: selectedPlan === index ? 1.1 : 1 }}
                    >
                      {plan.price}€
                    </motion.span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className={`h-5 w-5 text-${plan.color}-500 flex-shrink-0`} />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div className="pt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full rounded-2xl py-6 text-lg transition-all ${
                        selectedPlan === index
                          ? `bg-${plan.color}-600 hover:bg-${plan.color}-700 text-white shadow-lg`
                          : plan.popular
                            ? "bg-primary hover:bg-primary/90"
                            : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                      }`}
                    >
                      <motion.span
                        animate={{ x: selectedPlan === index ? [0, 5, 0] : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Commencer maintenant
                      </motion.span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <motion.footer
      className="bg-foreground text-background py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0">
        <img
          src="/footer-background-tech.jpg"
          alt="Fond technologique pour le footer"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <motion.div
        className="absolute top-10 right-10 w-16 h-16 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 left-10 w-12 h-12 opacity-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          delay: 3,
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FormationPro</h3>
            <p className="text-background/80 mb-4">
              La plateforme de formation en ligne qui transforme votre carrière.
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-background/80 hover:text-background">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="text-background/80 hover:text-background">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Formations</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Développement Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Design UX/UI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Gestion de Projet
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Communauté
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Partenaires
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Presse
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/80">
          <p>&copy; 2024 FormationPro. Tous droits réservés.</p>
        </div>
      </div>
    </motion.footer>
  )
}

// Main page component
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
