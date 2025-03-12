function calculateSustainability() {
    const energy = document.getElementById('energy').value;
    const waste = document.getElementById('waste').value;
    
    if (energy && waste) {
        const energyEmissionFactor = 0.233; // kg CO2 per kWh
        const energyEmissions = energy * energyEmissionFactor;
        
        const score = (energyEmissions * 0.5) + (waste * 0.5); // Simplified calculation
        document.getElementById('result').innerText = `Fenntarthatósági pontszám: ${score.toFixed(2)} kg CO2`;
    } else {
        document.getElementById('result').innerText = 'Kérjük, töltse ki az összes mezőt.';
    }
}