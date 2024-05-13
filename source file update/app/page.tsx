"use client";

import Link from "next/link";

export default function Home() {
  const data = require("./data.json");
  const currentData = data[19];
  console.log(currentData);

  function Item({ pdu, port }: { pdu: number; port: number }) {
    const data = require("./data.json");
    const currentData = data[19];
    console.log(currentData);

    const getVlaue = () => {
      const foundItem = currentData.values.find((item: any) => {
        return item.pdu === pdu && item.port === port;
      });

      // If foundItem is not undefined, return its 's' value
      if (foundItem) {
        return foundItem.s;
      }

      // If no matching item was found, return undefined
      return 0;
    };

    const getColorForState = (state: any) => {
      switch (state) {
        case 10:
          return "bg-green-500"; // OK
        case 20:
          return "bg-yellow-500"; // Loss of hashrate
        case 30:
          return "bg-yellow-600"; // Warning
        case 40:
          return "bg-orange-500"; // Minor problems
        case 50:
          return "bg-red-600"; // Major problems
        case 60:
          return "bg-red-800"; // Critical condition
        default:
          return "bg-gray-400"; // Default color for unknown state
      }
    };

    const s = getVlaue();

    return (
      <Link href={`/details/pdu_${pdu}_port_${port}`}>
        <div
          className={`h-8 w-8 ${getColorForState(
            s
          )} rounded flex justify-center items-center text-black`}
        >
          {s}
        </div>
      </Link>
    );
  }

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="bg-black min-w-[810px] border border-gray-400 rounded-lg">
        <div
          className="px-8 py-4 border-b border-b-gray-400
        "
        >
          <p className="text-white">{currentData.name}</p>
        </div>
        <div className="p-10 px-20 grid grid-cols-3 gap-4 text-white">
          {/* Group 1 */}
          <div
            className="border border-gray-600 rounded-lg  p-4 pr-6
          "
          >
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={1} port={1} />
              <Item pdu={1} port={2} />
              <Item pdu={1} port={3} />
              <Item pdu={1} port={4} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={1} port={5} />
              <Item pdu={1} port={6} />
              <Item pdu={1} port={7} />
              <Item pdu={1} port={8} />
              <Item pdu={1} port={9} />
              <Item pdu={1} port={10} />
              <Item pdu={1} port={11} />
              <Item pdu={1} port={12} />
              <Item pdu={1} port={13} />
            </div>
          </div>

          {/* Group 2 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={2} port={1} />
              <Item pdu={2} port={2} />
              <Item pdu={2} port={3} />
              <Item pdu={2} port={4} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={2} port={5} />
              <Item pdu={2} port={6} />
              <Item pdu={2} port={7} />
              <Item pdu={2} port={8} />
              <Item pdu={2} port={9} />
              <Item pdu={2} port={10} />
              <Item pdu={2} port={11} />
              <Item pdu={2} port={12} />
              <Item pdu={2} port={13} />
            </div>
          </div>

          {/* Group 3 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={3} port={1} />
              <Item pdu={3} port={2} />
              <Item pdu={3} port={3} />
              <Item pdu={3} port={4} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={3} port={5} />
              <Item pdu={3} port={6} />
              <Item pdu={3} port={7} />
              <Item pdu={3} port={8} />
              <Item pdu={3} port={9} />
              <Item pdu={3} port={10} />
              <Item pdu={3} port={11} />
              <Item pdu={3} port={12} />
              <Item pdu={3} port={13} />
            </div>
          </div>

          {/* Group 4 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={4} port={1} />
              <Item pdu={4} port={2} />
              <Item pdu={4} port={3} />
              <Item pdu={4} port={4} />
              <Item pdu={4} port={5} />
              <Item pdu={4} port={6} />
              <Item pdu={4} port={7} />
              <Item pdu={4} port={8} />
              <Item pdu={4} port={9} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={4} port={10} />
              <Item pdu={4} port={11} />
              <Item pdu={4} port={12} />
              <Item pdu={4} port={13} />
              <Item pdu={4} port={14} />
              <Item pdu={4} port={15} />
              <Item pdu={4} port={16} />
              <Item pdu={4} port={17} />
              <Item pdu={4} port={18} />
            </div>
          </div>

          {/* Group 5 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={5} port={1} />
              <Item pdu={5} port={2} />
              <Item pdu={5} port={3} />
              <Item pdu={5} port={4} />
              <Item pdu={5} port={5} />
              <Item pdu={5} port={6} />
              <Item pdu={5} port={7} />
              <Item pdu={5} port={8} />
              <Item pdu={5} port={9} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={5} port={10} />
              <Item pdu={5} port={11} />
              <Item pdu={5} port={12} />
              <Item pdu={5} port={13} />
              <Item pdu={5} port={14} />
              <Item pdu={5} port={15} />
              <Item pdu={5} port={16} />
              <Item pdu={5} port={17} />
              <Item pdu={5} port={18} />
            </div>
          </div>

          {/* Group 6 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={6} port={1} />
              <Item pdu={6} port={2} />
              <Item pdu={6} port={3} />
              <Item pdu={6} port={4} />
              <Item pdu={6} port={5} />
              <Item pdu={6} port={6} />
              <Item pdu={6} port={7} />
              <Item pdu={6} port={8} />
              <Item pdu={6} port={9} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={6} port={10} />
              <Item pdu={6} port={11} />
              <Item pdu={6} port={12} />
              <Item pdu={6} port={13} />
              <Item pdu={6} port={14} />
              <Item pdu={6} port={15} />
              <Item pdu={6} port={16} />
              <Item pdu={6} port={17} />
              <Item pdu={6} port={18} />
            </div>
          </div>

          {/* Group 7 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={7} port={1} />
              <Item pdu={7} port={2} />
              <Item pdu={7} port={3} />
              <Item pdu={7} port={4} />
              <Item pdu={7} port={5} />
              <Item pdu={7} port={6} />
              <Item pdu={7} port={7} />
              <Item pdu={7} port={8} />
              <Item pdu={7} port={9} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={7} port={10} />
              <Item pdu={7} port={11} />
              <Item pdu={7} port={12} />
              <Item pdu={7} port={13} />
              <Item pdu={7} port={14} />
              <Item pdu={7} port={15} />
              <Item pdu={7} port={16} />
              <Item pdu={7} port={17} />
              <Item pdu={7} port={18} />
            </div>
          </div>

          {/* Group 8 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={8} port={1} />
              <Item pdu={8} port={2} />
              <Item pdu={8} port={3} />
              <Item pdu={8} port={4} />
              <Item pdu={8} port={5} />
              <Item pdu={8} port={6} />
              <Item pdu={8} port={7} />
              <Item pdu={8} port={8} />
              <Item pdu={8} port={9} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={8} port={10} />
              <Item pdu={8} port={11} />
              <Item pdu={8} port={12} />
              <Item pdu={8} port={13} />
              <Item pdu={8} port={14} />
              <Item pdu={8} port={15} />
              <Item pdu={8} port={16} />
              <Item pdu={8} port={17} />
              <Item pdu={8} port={18} />
            </div>
          </div>

          {/* Group 9 */}
          <div className="border border-gray-600 rounded-lg  p-4 pr-6">
            <div className="grid grid-cols-9 gap-4">
              <Item pdu={9} port={1} />
              <Item pdu={9} port={2} />
              <Item pdu={9} port={3} />
              <Item pdu={9} port={4} />
              <Item pdu={9} port={5} />
              <Item pdu={9} port={6} />
              <Item pdu={9} port={7} />
              <Item pdu={9} port={8} />
              <Item pdu={9} port={9} />
            </div>
            <div className="grid grid-cols-9 gap-4 mt-4">
              <Item pdu={9} port={10} />
              <Item pdu={9} port={11} />
              <Item pdu={9} port={12} />
              <Item pdu={9} port={13} />
              <Item pdu={9} port={14} />
              <Item pdu={9} port={15} />
              <Item pdu={9} port={16} />
              <Item pdu={9} port={17} />
              <Item pdu={9} port={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
