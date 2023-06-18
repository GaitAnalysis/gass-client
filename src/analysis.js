import React, { useState, useEffect } from 'react';
import ApiService from './apiservice';

const Analysis = () => {
  const [analyses, setAnalyses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const response = await ApiService.getAnalysis();
        setAnalyses(response?.analyses || []); // Use optional chaining and default to an empty array
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch analysis:', error);
      }
    };

    fetchAnalysis();
  }, []);

  if (isLoading) {
    return <p>Loading analysis data...</p>;
  }

  if (analyses.length === 0) {
    return <p>No analysis data available.</p>;
  }

 
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '20px', marginTop: '10px' }}>
      <h2>Analysis Results</h2>
      {analyses.map((analysis) => (
        <div key={analysis.ID} style={{ marginBottom: '10px', display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <hr style={{ margin: '5px 0' }} />
            <h3>Analysis # {analysis.ID}</h3>
            <p>Created At: {analysis.CreatedAt}</p>
            <p>Updated At: {analysis.UpdatedAt}</p>
            <p>Input Size: {analysis.upload.size}</p>
          </div>
          <div style={{ flex: '1' }}>
            <hr style={{ margin: '5px 0' }} />
            <h3>Results:</h3>
            <p>Confidence: {analysis.result.confidence}</p>
            <p>Label: {analysis.result.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Analysis;