import React, { useState } from "react";

export default function VaultLandingPage() {
  const [alias, setAlias] = useState("");
  const [contact, setContact] = useState("");
  const [reason, setReason] = useState("");
  const [packageType, setPackageType] = useState("ID Only ($100)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      alias,
      contact,
      reason,
      packageType,
    };

    try {
      const res = await fetch("/api/request-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  const sampleImages = [
    "/samples/virginia-id.jpg",
    "/samples/maryland-id.jpg",
    "/samples/sample-id-1.jpg",
    "/samples/sample-id-2.jpg",
    "/samples/sample-id-3.jpg",
    "/samples/sample-id-4.jpg",
    "/samples/sample-id-5.jpg",
    "/samples/sample-id-6.jpg",
    "/samples/sample-id-7.jpg",
    "/samples/sample-id-8.jpg"
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        The Vault
      </h1>

      <p style={{ fontSize: '1rem', color: '#ccc', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        10 elite slots per month. Custom-crafted profiles, replica IDs, and curated digital identities. 
        You don’t buy a product — you gain access to the underground.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {sampleImages.map((src, i) => (
          <img key={i} src={src} alt={`Sample ID ${i + 1}`} style={{ width: '100%', borderRadius: '10px', border: '2px solid #333' }} />
        ))}
      </div>

      {submitted ? (
        <p style={{ color: '#34d399', fontSize: '1.2rem', textAlign: 'center' }}>Access request submitted. Wait for the ghost ping.</p>
      ) : (
        <div style={{ backgroundColor: '#1c1c1c', padding: '1.5rem', borderRadius: '10px', maxWidth: '400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Request Access</h2>
          <input
            type="text"
            placeholder="Alias or Handle"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '5px' }}
          />
          <input
            type="text"
            placeholder="Secure Contact (ProtonMail preferred)"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '5px' }}
          />
          <select
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '5px' }}
          >
            <option value="ID Only ($100)">ID Only ($100)</option>
            <option value="ID + SSN ($300)">ID + SSN ($300)</option>
            <option value="BC + Utility Doc ($450)">BC + Utility Doc ($450)</option>
          </select>
          <input
            type="text"
            placeholder="Brief Reason for Access"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', marginBottom: '1.5rem', backgroundColor: '#333', color: 'white', border: '1px solid #555', borderRadius: '5px' }}
          />
          <button
            onClick={handleSubmit}
            style={{ width: '100%', backgroundColor: '#10b981', color: 'white', padding: '0.75rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Submit Request
          </button>
        </div>
      )}
    </div>
  );
}
