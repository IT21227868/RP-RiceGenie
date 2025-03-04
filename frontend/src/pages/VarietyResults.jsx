import { useLocation, Link } from "react-router-dom";
import { jsPDF } from "jspdf";

const VarietyResult = () => {
  const { state } = useLocation();
  const { district, ageGroup, riceVarieties } = state || {};

  console.log("Received state:", { state });

  const downloadPDF = () => {
    const doc = new jsPDF();

    const titleFont = "helvetica";
    const titleFontSize = 16;
    const textFontSize = 12;
    const footerFontSize = 10;
    const lineHeight = 10;
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFont(titleFont, "bold");
    doc.setFontSize(titleFontSize);
    doc.text(
      `Rice Variety Suggestions for ${district} - Age Group: ${ageGroup}`,
      margin,
      margin
    );

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.5);
    doc.line(margin, margin + 5, pageWidth - margin, margin + 5);

    let yPosition = margin + 10;

    riceVarieties.forEach((variety, index) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(textFontSize);

      if (index % 2 === 0) {
        doc.setFillColor(244, 244, 244);
      } else {
        doc.setFillColor(220, 220, 220);
      }
      doc.rect(
        margin,
        yPosition - lineHeight + 3,
        pageWidth - 2 * margin,
        lineHeight,
        "F"
      );

      doc.setTextColor(0, 0, 0);
      doc.text(`${index + 1}. ${variety}`, margin, yPosition);

      yPosition += lineHeight;
    });

    doc.setFont("helvetica", "italic");
    doc.setFontSize(footerFontSize);

    doc.save(`rice_varieties_${district}_${ageGroup}.pdf`);
  };

  return (
    <div className="flex flex-col items-center py-20 bg-gray-100 px-4">
      <div className="bg-black/80 p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h2 className="text-2xl text-center font-semibold text-gray-200 mb-6">
          Best-suited Rice Varieties for {district} under {ageGroup}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {riceVarieties.length > 0 ? (
            riceVarieties.map((variety, index) => (
              <Link
                key={index}
                to={`/variety-details/${variety}`}
                className="bg-darkgreen text-white p-4 rounded-lg shadow-md text-center"
              >
                <h3 className="text-lg font-semibold">{variety}</h3>
              </Link>
            ))
          ) : (
            <div className="w-full text-center text-gray-200">No varieties found</div>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={downloadPDF}
            className="py-3 px-6 bg-darkgreen text-white rounded-lg shadow-md"
          >
            Download the Variety Suggestions for {district}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VarietyResult;
