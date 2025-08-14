import React, { useState } from 'react';
import { BarChart3, Bell, Calendar, CheckCircle, Clock, DollarSign, FileText, MessageSquare, Settings, TrendingUp, User, Zap } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const projects = [
    {
      id: 1,
      name: "E-commerce Chatbot",
      status: "In Progress",
      progress: 75,
      dueDate: "2025-02-15",
      type: "GPT Integration",
      budget: "$12,000",
      spent: "$9,000"
    },
    {
      id: 2,
      name: "Vision AI Quality Control",
      status: "Planning",
      progress: 25,
      dueDate: "2025-03-20",
      type: "Computer Vision",
      budget: "$25,000",
      spent: "$5,000"
    },
    {
      id: 3,
      name: "Process Automation Suite",
      status: "Completed",
      progress: 100,
      dueDate: "2025-01-10",
      type: "Automation",
      budget: "$18,000",
      spent: "$17,500"
    }
  ];

  const notifications = [
    {
      id: 1,
      message: "Your E-commerce Chatbot project milestone completed",
      time: "2 hours ago",
      type: "success",
      read: false
    },
    {
      id: 2,
      message: "New invoice generated for Vision AI project",
      time: "5 hours ago",
      type: "info",
      read: false
    },
    {
      id: 3,
      message: "Weekly progress report is ready for review",
      time: "1 day ago",
      type: "normal",
      read: true
    }
  ];

  const metrics = [
    {
      title: "Active Projects",
      value: "3",
      change: "+1",
      changeType: "positive",
      icon: FileText
    },
    {
      title: "Total Investment",
      value: "$55,000",
      change: "+$12,000",
      changeType: "positive",
      icon: DollarSign
    },
    {
      title: "Hours Automated",
      value: "120",
      change: "+45",
      changeType: "positive",
      icon: Clock
    },
    {
      title: "ROI Generated",
      value: "340%",
      change: "+85%",
      changeType: "positive",
      icon: TrendingUp
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'In Progress':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'Planning':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
              <p className="text-gray-400">Here's what's happening with your AI projects</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="relative p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all">
                <Settings className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{metric.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
                    <p className={`text-sm mt-1 ${
                      metric.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.change}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-3">
                    <metric.icon className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Projects List */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Your Projects</h2>
                  <button className="text-cyan-400 hover:text-cyan-300 font-semibold">View All</button>
                </div>

                <div className="space-y-6">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                          <p className="text-gray-400 text-sm">{project.type}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full h-2 transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-400">
                            <Calendar className="h-4 w-4 inline mr-1" />
                            Due: {new Date(project.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-400">Budget: {project.budget}</span>
                          <span className="text-cyan-400">Spent: {project.spent}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Notifications</h3>
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {notifications.filter(n => !n.read).length}
                  </span>
                </div>

                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border transition-all ${
                        notification.read
                          ? 'bg-white/5 border-white/10'
                          : 'bg-cyan-500/10 border-cyan-500/20'
                      }`}
                    >
                      <p className="text-sm text-gray-300">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                    <span className="flex items-center justify-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Start New Project</span>
                    </span>
                  </button>
                  
                  <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                    <span className="flex items-center justify-center space-x-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>Contact Support</span>
                    </span>
                  </button>
                  
                  <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 text-white font-semibold py-3 px-4 rounded-lg transition-all">
                    <span className="flex items-center justify-center space-x-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>View Analytics</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                
                <div className="space-y-4">
                  {[
                    { action: "Chatbot training completed", time: "2 hours ago", icon: CheckCircle, color: "text-green-400" },
                    { action: "Invoice #1234 generated", time: "5 hours ago", icon: FileText, color: "text-blue-400" },
                    { action: "Project milestone reached", time: "1 day ago", icon: TrendingUp, color: "text-purple-400" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <activity.icon className={`h-4 w-4 ${activity.color}`} />
                      <div className="flex-1">
                        <p className="text-sm text-gray-300">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;