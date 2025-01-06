function calculateContributions() {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);

    if (isNaN(grossSalary)) {
        return;
    }

    // Taux de cotisations salariales pour 2025
    const csgRdsNonDeductibleRate = 0.029;
    const csgDeductibleRate = 0.068;
    const vieillesseRate = 0.004;
    const maladieRate = 0.069;
    const retraiteRate = 0.0401;
    const prevoyanceRate = 0.0104;
  
    const grossSalaryBaseDeductible = grossSalary * 0.9825

    const csgRdsNonDeductible = grossSalaryBaseDeductible * csgRdsNonDeductibleRate;
    const csgDeductible = grossSalaryBaseDeductible * csgDeductibleRate;
    const vieillesse = grossSalary * vieillesseRate;
    const maladie = grossSalary * maladieRate;
    const retraite = grossSalary * retraiteRate;
    const prevoyance = grossSalary * prevoyanceRate;

    const totalEmployeeContributions = csgRdsNonDeductible + csgDeductible + vieillesse + maladie + retraite + prevoyance;
    const netSalary = grossSalary - totalEmployeeContributions;

    document.getElementById('csg-rds-non-deductible').value = csgRdsNonDeductible.toFixed(2);
    document.getElementById('csg-deductible').value = csgDeductible.toFixed(2);
    document.getElementById('vieillesse').value = vieillesse.toFixed(2);
    document.getElementById('maladie').value = maladie.toFixed(2);
    document.getElementById('retraite').value = retraite.toFixed(2);
    document.getElementById('prevoyance').value = prevoyance.toFixed(2);
    document.getElementById('total-employee-contributions').value = totalEmployeeContributions.toFixed(2);
    document.getElementById('net-salary').value = netSalary.toFixed(2);
}

function generatePayslip() {
    const employerName = document.getElementById('employer-name').value;
    const employerAddress = document.getElementById('employer-address').value;
    const employeeName = document.getElementById('employee-name').value;
    const employeePosition = document.getElementById('employee-position').value;
    const grossSalary = document.getElementById('gross-salary').value;
    const netSalary = document.getElementById('net-salary').value;
    const csgRdsNonDeductible = document.getElementById('csg-rds-non-deductible').value;
    const csgDeductible = document.getElementById('csg-deductible').value;
    const vieillesse = document.getElementById('vieillesse').value;
    const maladie = document.getElementById('maladie').value;
    const retraite = document.getElementById('retraite').value;
    const prevoyance = document.getElementById('prevoyance').value;
    const totalEmployeeContributions = document.getElementById('total-employee-contributions').value;
    const payslip = `
        <h2>Bulletin de Salaire</h2>
        <div class=employgroup>
        <div class="groupbox">
        <p>Employeur: ${employerName}</p>
        <p>Adresse: ${employerAddress}</p>
        </div>
        <div class="groupbox">
        <p>Employé: ${employeeName}</p>
        <p>Poste: ${employeePosition}</p>
        </div>
        </div>
        <p><strong>Salaire Brut:</strong> ${grossSalary} €</p>
        <div class="groupbox">
        <p>CSG/RDS non déductible: ${csgRdsNonDeductible} €</p>
        <p>CSG déductible: ${csgDeductible} €</p>
        <p>Vieillesse: ${vieillesse} €</p>
        <p>Maladie: ${maladie} €</p>
        <p>Retraite: ${retraite} €</p>
        <p>Prévoyance: ${prevoyance} €</p>
        <p><strong>Total Cotisations Salariales:</strong> ${totalEmployeeContributions} €</p>
        </div>
        <p><strong>Salaire Net:</strong> ${netSalary} €</p>
    `;
    document.getElementById('payslip'). innerHTML = DOMPurify.sanitize(payslip);
}
