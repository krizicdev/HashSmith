import Link from "next/link";

export default function Item({ pdu, port }: { pdu: number; port: number }) {
  const data = require("./data.json");
  const currentData = data[19];
  console.log(currentData);

  const getVlaue = () => {
    const foundItem = currentData.values.find((item:any) => {
      return item.pdu === pdu && item.port === port;
    });

    // If foundItem is not undefined, return its 's' value
    if (foundItem) {
      return foundItem.s;
    }

    // If no matching item was found, return undefined
    return 0;
  };

  const getColorForState = (state:any) => {
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
    <Link href={`/details?pdu=${pdu}&port=${port}`}>
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
