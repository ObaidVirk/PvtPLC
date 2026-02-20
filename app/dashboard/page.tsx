'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  TrendingUp, 
  DollarSign,
  Search,
  Filter,
  MoreVertical,
  ArrowUp,
  ArrowDown,
  Activity,
  UserPlus,
  Briefcase,
  Globe
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      label: 'Total Companies',
      value: '50,284',
      change: '+12.5%',
      trend: 'up',
      icon: Building2,
      color: 'blue'
    },
    {
      label: 'Active Users',
      value: '75,420',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      label: 'Total Funding Tracked',
      value: '$15.2T',
      change: '+5.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'purple'
    },
    {
      label: 'API Requests',
      value: '2.4M',
      change: '-2.1%',
      trend: 'down',
      icon: Activity,
      color: 'orange'
    }
  ]

  const recentCompanies = [
    {
      name: 'TechFlow AI',
      industry: 'Artificial Intelligence',
      funding: '$45M',
      round: 'Series B',
      date: '2 hours ago',
      status: 'active'
    },
    {
      name: 'CloudScale Systems',
      industry: 'Cloud Infrastructure',
      funding: '$12M',
      round: 'Series A',
      date: '5 hours ago',
      status: 'active'
    },
    {
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      funding: '$28M',
      round: 'Series B',
      date: '8 hours ago',
      status: 'pending'
    },
    {
      name: 'GreenEnergy Innovations',
      industry: 'Clean Energy',
      funding: '$35M',
      round: 'Series B',
      date: '1 day ago',
      status: 'active'
    },
    {
      name: 'DataStream Analytics',
      industry: 'Data Analytics',
      funding: '$60M',
      round: 'Series C',
      date: '2 days ago',
      status: 'active'
    }
  ]

  const recentUsers = [
    { name: 'Sarah Johnson', email: 'sarah.j@company.com', plan: 'Professional', joined: '2 hours ago' },
    { name: 'Michael Chen', email: 'michael.c@startup.io', plan: 'Enterprise', joined: '5 hours ago' },
    { name: 'Emily Rodriguez', email: 'emily.r@venture.com', plan: 'Professional', joined: '1 day ago' },
    { name: 'David Kim', email: 'david.k@tech.com', plan: 'Starter', joined: '2 days ago' },
    { name: 'Lisa Anderson', email: 'lisa.a@invest.com', plan: 'Professional', joined: '3 days ago' }
  ]

  const activityData = [
    { action: 'New company added', user: 'Admin', time: '5 min ago', type: 'create' },
    { action: 'User upgraded to Pro', user: 'sarah.j@company.com', time: '15 min ago', type: 'upgrade' },
    { action: 'API key generated', user: 'michael.c@startup.io', time: '1 hour ago', type: 'api' },
    { action: 'Export completed', user: 'emily.r@venture.com', time: '2 hours ago', type: 'export' },
    { action: 'New company added', user: 'Admin', time: '3 hours ago', type: 'create' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Image
                src="/adminpanel.png"
                alt="Admin Panel Logo"
                width={180}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening today.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700">
                Export Data
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Add Company
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200">
            {[
              { id: 'overview', label: 'Overview', icon: LayoutDashboard },
              { id: 'companies', label: 'Companies', icon: Building2 },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container-custom py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Companies */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Recent Companies</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{company.name}</h3>
                        <p className="text-sm text-gray-600">{company.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{company.funding}</div>
                        <div className="text-sm text-gray-600">{company.round}</div>
                      </div>
                      <div className="text-sm text-gray-500 w-24 text-right">
                        {company.date}
                      </div>
                      <button className="p-2 hover:bg-white rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {activityData.map((activity, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === 'create' ? 'bg-green-500' :
                      activity.type === 'upgrade' ? 'bg-blue-500' :
                      activity.type === 'api' ? 'bg-purple-500' : 'bg-gray-400'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.user}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Users */}
        <div className="mt-6 bg-white rounded-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Recent Users</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">User</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Plan</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Joined</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentUsers.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-blue-600">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.plan === 'Enterprise' ? 'bg-purple-100 text-purple-700' :
                        user.plan === 'Professional' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{user.joined}</td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
