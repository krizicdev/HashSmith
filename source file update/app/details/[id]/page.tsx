import React from "react";

export async function generateStaticParams() {
  const data = require("../../data.json");
  return data[19].values.map((item: any) => ( { id: `pdu_${item.pdu}_port_${item.port}` }));
}

export default function page({ params }: any) {
  const { id } = params;
  const pdu = parseInt(id.split("_")[1]);
  const port = parseInt(id.split("_")[3]);

  const data = require("../../data.json");
  const currentData = data[19];

  const getVlaue = () => {
    const foundItem = currentData.values.find((item: any) => {
      return (
        item.pdu === pdu && item.port === port
      );
    });

    // If foundItem is not undefined, return its 's' value
    if (foundItem) {
      return foundItem;
    }

    // If no matching item was found, return undefined
    return null;
  };

  const currentObject = getVlaue();

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="min-w-[810px] border border-gray-400 p-4 rounded-lg bg-gray-900 text-white">
        <h1 className="text-white text-center border-b border-b-gray-600 pb-2">
          Details
        </h1>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">TH5s:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.TH5s}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">THAvg:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.THAvg}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">tB:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.tB}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">freq:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.freq}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">w:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.w}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">s:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.s}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">pdu:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.pdu}
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-600">port:</td>
              <td className="py-2 px-4 border-b border-gray-600">
                {currentObject?.port}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
