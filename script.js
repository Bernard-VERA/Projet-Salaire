function calculateContributions() {
    const grossSalary = parseFloat(document.getElementById('gross-salary').value);
    const maintenanceAllowance = parseFloat(document.getElementById('maintenance-allowance').value) || 0; 
    const mealAllowance = parseFloat(document.getElementById('meal-allowance').value) || 0;
    const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;

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

    const employerMaladieRate = 0.13
    const employerVieillesseRate = 0.1057;
    const employerFamilleRate = 0.0525;
    const employerAccidentRate = 0.0079;
    const employerFnalRate = 0.001;
    const employerCsaRate = 0.003;
    const employerFormationRate = 0.0085;
    const employerDialogueRate = 0.00016;
    const employerComplementaireRate = 0.0601;
    const employerPrevoyanceRate = 0.0245;
    const employerChomageRate = 0.0405
  
    const grossSalaryBaseDeductible = grossSalary * 0.9825

    const csgRdsNonDeductible = grossSalaryBaseDeductible * csgRdsNonDeductibleRate;
    const csgDeductible = grossSalaryBaseDeductible * csgDeductibleRate;
    const vieillesse = grossSalary * vieillesseRate;
    const maladie = grossSalary * maladieRate;
    const retraite = grossSalary * retraiteRate;
    const prevoyance = grossSalary * prevoyanceRate;

    const employerMaladie = grossSalary * employerMaladieRate;
    const employerVieillesse = grossSalary * employerVieillesseRate;
    const employerAllocFamiliales = grossSalary * employerFamilleRate;
    const employerAccident = grossSalary * employerAccidentRate;
    const employerFnal = grossSalary * employerFnalRate;
    const employerCsa = grossSalary * employerCsaRate;
    const employerFormation = grossSalary * employerFormationRate;
    const employerDialogue = grossSalary * employerDialogueRate;
    const employerComplementaire = grossSalary * employerComplementaireRate;
    const employerPrevoyance = grossSalary * employerPrevoyanceRate;
    const employerChomage = grossSalary * employerChomageRate;

    const totalEmployeeContributions = csgRdsNonDeductible + csgDeductible + vieillesse + maladie + retraite + prevoyance;
    const totalEmployerContributions = employerMaladie + employerVieillesse + employerAllocFamiliales + employerAccident + employerFnal + employerCsa + employerFormation + employerDialogue + employerComplementaire + employerPrevoyance + employerChomage;
    const netSalary = grossSalary - totalEmployeeContributions;
    const allowanceNetSalary = netSalary + mealAllowance + maintenanceAllowance;
    const taxableSalary = allowanceNetSalary + csgRdsNonDeductible;
    const taxLieved = taxableSalary * taxRate /100;
    const netToPay = allowanceNetSalary - taxLieved;
    

    document.getElementById('csg-rds-non-deductible').value = csgRdsNonDeductible.toFixed(2);
    document.getElementById('csg-deductible').value = csgDeductible.toFixed(2);
    document.getElementById('vieillesse').value = vieillesse.toFixed(2);
    document.getElementById('maladie').value = maladie.toFixed(2);
    document.getElementById('retraite').value = retraite.toFixed(2);
    document.getElementById('prevoyance').value = prevoyance.toFixed(2);
    document.getElementById('total-employee-contributions').value = totalEmployeeContributions.toFixed(2);
    document.getElementById('net-salary').value = netSalary.toFixed(2);
    document.getElementById('maladie-employer').value = employerMaladie.toFixed(2);
    document.getElementById('vieillesse-employer').value = employerVieillesse.toFixed(2);
    document.getElementById('alloc-familiales-employer').value = employerAllocFamiliales.toFixed(2);
    document.getElementById('accident-employer').value = employerAccident.toFixed(2);
    document.getElementById('fnal-employer').value = employerFnal.toFixed(2);
    document.getElementById('csa-employer').value = employerCsa.toFixed(2);
    document.getElementById('formation-employer').value = employerFormation.toFixed(2);
    document.getElementById('dialogue-employer').value = employerDialogue.toFixed(2);
    document.getElementById('complementaire-employer').value = employerComplementaire.toFixed(2);
    document.getElementById('prevoyance-employer').value = employerPrevoyance.toFixed(2);
    document.getElementById('chomage-employer').value = employerChomage.toFixed(2);
    document.getElementById('total-employer-contributions').value = totalEmployerContributions.toFixed(2);
    document.getElementById('maintenance-allowance').value = maintenanceAllowance.toFixed(2);
    document.getElementById('meal-allowance').value = mealAllowance.toFixed(2);
    document.getElementById('allowance-net-salary').value = allowanceNetSalary.toFixed(2);
    document.getElementById('taxable-salary').value = taxableSalary.toFixed(2);
    document.getElementById('tax-rate').value = taxRate.toFixed(2);
    document.getElementById('tax-lieved').value = taxLieved.toFixed(2);
    document.getElementById('net-to-pay').value = netToPay.toFixed(2);
}

function generatePayslip() {
    const employerName = document.getElementById('employer-name').value;
    const employerAddress = document.getElementById('employer-address').value;
    const employerNumber = document.getElementById('employer-number').value;
    const employeeName = document.getElementById('employee-name').value;
    const employeePosition = document.getElementById('employee-position').value;
    const employeeNumber = document.getElementById('employee-number').value;
    const socialSecurity = document.getElementById('social-security').value;
    const grossSalary = document.getElementById('gross-salary').value;
    const netSalary = document.getElementById('net-salary').value;
    const csgRdsNonDeductible = document.getElementById('csg-rds-non-deductible').value;
    const csgDeductible = document.getElementById('csg-deductible').value;
    const vieillesse = document.getElementById('vieillesse').value;
    const maladie = document.getElementById('maladie').value;
    const retraite = document.getElementById('retraite').value;
    const prevoyance = document.getElementById('prevoyance').value;
    const totalEmployeeContributions = document.getElementById('total-employee-contributions').value;
    const employerMaladie = document.getElementById('maladie-employer').value;
    const employerVieillesse = document.getElementById('vieillesse-employer').value;
    const employerAllocFamiliales = document.getElementById('alloc-familiales-employer').value;
    const employerAccident = document.getElementById('accident-employer').value;
    const employerFnal = document.getElementById('fnal-employer').value;
    const employerCsa = document.getElementById('csa-employer').value;
    const employerFormation = document.getElementById('formation-employer').value;
    const employerDialogue = document.getElementById('dialogue-employer').value;
    const employerComplementaire = document.getElementById('complementaire-employer').value;
    const employerPrevoyance = document.getElementById('prevoyance-employer').value;
    const employerChomage = document.getElementById('chomage-employer').value;
    const totalEmployerContributions = document.getElementById('total-employer-contributions').value;
    const maintenanceAllowance = document.getElementById('maintenance-allowance').value;
    const mealAllowance = document.getElementById('meal-allowance').value;
    const allowanceNetSalary = document.getElementById('allowance-net-salary').value;
    const taxableSalary = document.getElementById('taxable-salary').value;
    const taxRate = document.getElementById('tax-rate').value;
    const taxLieved = document.getElementById('tax-lieved').value;
    const netToPay = document.getElementById('net-to-pay').value;
    

    const payslip = `
        <h2>Bulletin de Salaire</h2>
        <div class="employgroup">
            <div class="groupbox">
                <p>Employeur(se) : ${employerName}</p>
                <p>Adresse : ${employerAddress}</p>
                <p>Numéro : ${employerNumber}</p>
            </div>
            <div class="groupbox">
                <p>Employé(e) : ${employeeName}</p>
                <p>Poste : ${employeePosition}</p>
                <p>Numéro : ${employeeNumber}</p>
                <p>Numéro de SS : ${socialSecurity}</p>
            </div>
        </div>
        <p><strong>Salaire Brut : <span style="float: right;">${grossSalary} €</span></strong></p>
        <div class="groupbox">
            <p>CSG/RDS non déductible : <span style="float: right;">${csgRdsNonDeductible} €</span></p>
            <p>CSG déductible : <span style="float: right;">${csgDeductible} €</span></p>
            <p>Vieillesse : <span style="float: right;">${vieillesse} €</span></p>
            <p>Maladie : <span style="float: right;">${maladie} €</span></p>
            <p>Retraite : <span style="float: right;">${retraite} €</span></p>
            <p>Prévoyance : <span style="float: right;">${prevoyance} €</span></p>
            <p><strong>Total Cotisations Salariales :</strong> <span style="float: right;">${totalEmployeeContributions} €</span></p>
        </div>
        <div class="groupbox">
            <p>Maladie : <span style="float: right;">${employerMaladie} €</span></p>
            <p>Vieillesse : <span style="float: right;">${employerVieillesse} €</span></p>
            <p>Alloc. Familiales : <span style="float: right;">${employerAllocFamiliales} €</span></p>
            <p>Accident du travail : <span style="float: right;">${employerAccident} €</span></p>
            <p>FNAL : <span style="float: right;">${employerFnal} €</span></p>
            <p>CSA : <span style="float: right;">${employerCsa} €</span></p>
            <p>Formation professionnelle : <span style="float: right;">${employerFormation} €</span></p>
            <p>Dialogue social : <span style="float: right;">${employerDialogue} €</span></p>
            <p>Retraite complémentaire : <span style="float: right;">${employerComplementaire} €</span></p>
            <p>Prévoyance : <span style="float: right;">${employerPrevoyance} €</span></p>
            <p>Assurance chômage : <span style="float: right;">${employerChomage} €</span></p>
            <p><strong>Total Cotisations Patronales :</strong> <span style="float: right;">${totalEmployerContributions} €</span></p>
        </div>
        <p><strong>Salaire Net : <span style="float: right;">${netSalary} €</span></strong></p>
        <div class="groupbox">
            <p>Indemnités d'entretien : <span style="float: right;">${maintenanceAllowance} €</span></p>
            <p>Indemnités de repas : <span style="float: right;">${mealAllowance} €</span></p>
            <p><strong>Salaire net + indemnités : <span style="float: right;">${allowanceNetSalary} €</span></strong></p>
        </div>
        <div class="groupbox">
            <p>Salaire imposable : <span style="float: right;">${taxableSalary} €</span></p>
            <p>Taux d'imposition : <span style="float: right;">${taxRate} %</span></p>
            <p>Impôt prélevé : <span style="float: right;">${taxLieved} €</span></p>
        </div>
        <div class="groupbox">
        <p><strong>NET A PAYER : <span style="float: right;">${netToPay} €</strong></span></p>
        </div>
    `;
    document.getElementById('payslip').innerHTML = DOMPurify.sanitize(payslip);
}
