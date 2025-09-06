"use client"

import { IDebt } from "@/redux/types"

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

// Format percentage
const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(1)}%`
}

export default function DebtDashboard({debtStructure,fundingSources}:IDebt) {
  return (
    <div className="mt-10 mx-auto space-y-8">
      {/* Debt Structure Table */}
          <h2 className="text-2xl sm:text-4xl font-medium text-gray-800 mb-6">Debt Structure</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6">

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-100">
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#121417] border-r border-purple-200">
                    Year
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#121417] border-r border-purple-200">
                    Repayment
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#121417] border-r border-purple-200">
                    Interest Rate
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#121417] border-r border-purple-200">
                    Non Current Assets
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#121417]">Outstanding Debt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {debtStructure.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-normal text-[#61758A] border-r border-gray-200">
                      Year {item.year.toString().padStart(2, "0")}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-[#61758A] border-r border-gray-200">
                      {formatCurrency(item.repayment)}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-[#61758A] border-r border-gray-200">
                      {formatPercentage(item.interest_rate)}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-[#61758A] border-r border-gray-200">
                      {formatCurrency(70000)}
                    </td>
                    <td className="px-6 py-4 text-sm font-normal text-[#61758A]">{formatCurrency(item.outstanding_debt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Funding Sources */}
        <h2 className="text-2xl sm:text-4xl font-medium text-gray-800 mb-6">Funding Sources</h2>
      <div className="">
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg lg:text-xl text-justify">{fundingSources}
          </p>
        </div>
      </div>

    </div>
  )
}
