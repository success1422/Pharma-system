/* =========================================================
   Demo data — all products are fictional.
   Exposed as window.SUCCESS_PRODUCTS for app.js.
   ========================================================= */
window.SUCCESS_PRODUCTS = [
  {
    id: 'cardivex',
    name: 'Cardivex',
    generic: 'nexastatin',
    area: 'Cardiovascular',
    type: 'Rx',
    form: 'Film-coated tablet',
    strengths: '10 mg · 20 mg · 40 mg',
    short: 'Once-daily lipid-lowering therapy for adults with primary hypercholesterolaemia and mixed dyslipidaemia.',
    indications: [
      'Primary hypercholesterolaemia, including heterozygous familial hypercholesterolaemia',
      'Mixed dyslipidaemia (Fredrickson types IIa and IIb)',
      'Secondary prevention of major cardiovascular events in adults with established atherosclerotic disease'
    ],
    composition: 'Each film-coated tablet contains nexastatin 10 mg, 20 mg, or 40 mg. Excipients: lactose monohydrate, microcrystalline cellulose, croscarmellose sodium, magnesium stearate, hypromellose, titanium dioxide.',
    dosage: 'Initiate 10 mg once daily in the evening and titrate at 4-week intervals according to response, to a maximum of 40 mg daily. Reassess the lipid profile after 6–12 weeks. No dose adjustment is required in mild renal impairment; use with caution in severe hepatic impairment.',
    warnings: [
      'Contraindicated in active liver disease or unexplained persistent transaminase elevations above 3× the upper limit of normal.',
      'Risk of myopathy and rhabdomyolysis. Interrupt therapy if unexplained muscle pain, tenderness, or weakness occurs.',
      'Avoid concomitant strong CYP3A4 inhibitors and gemfibrozil.',
      'Not recommended during pregnancy or breastfeeding.'
    ],
    storage: 'Store below 30 °C in the original blister. Protect from moisture. Keep out of the reach and sight of children.',
    note: 'Prescription-only medicine. Refer to the current Summary of Product Characteristics before prescribing.'
  },
  {
    id: 'pulmavair',
    name: 'Pulmavair',
    generic: 'respivant',
    area: 'Respiratory',
    type: 'Rx',
    form: 'Pressurised metered-dose inhaler (pMDI)',
    strengths: '50 µg · 100 µg per actuation',
    short: 'Inhaled maintenance therapy for asthma and COPD, delivered with a dose-counter inhaler.',
    indications: [
      'Maintenance treatment of asthma in adults and adolescents aged 12 years and older',
      'Symptomatic treatment of COPD in adults with post-bronchodilator FEV1 below 80% predicted',
      'Not indicated for the relief of acute bronchospasm'
    ],
    composition: 'Each actuation delivers respivant 50 µg or 100 µg. Excipients: norflurane (HFA-134a) propellant, anhydrous ethanol.',
    dosage: 'One or two inhalations twice daily, titrated to symptom control. Rinse the mouth after each use to reduce the risk of oral candidiasis. Maximum four inhalations daily.',
    warnings: [
      'Not a rescue medication; a short-acting bronchodilator must be available.',
      'Paradoxical bronchospasm has been reported; discontinue immediately if it occurs.',
      'Monitor for oral candidiasis and dysphonia.',
      'Use with caution in patients with active or quiescent tuberculosis.'
    ],
    storage: 'Store below 25 °C. Do not puncture or incinerate. Protect from direct sunlight and frost.',
    note: 'Prescription-only medicine. Provide patients with inhaler technique training.'
  },
  {
    id: 'neurastop',
    name: 'Neurastop',
    generic: 'zelafentin',
    area: 'Neuroscience',
    type: 'Rx',
    form: 'Extended-release capsule',
    strengths: '150 mg · 300 mg',
    short: 'Adjunctive therapy for focal onset seizures in adults and adolescents aged 12 years and older.',
    indications: [
      'Adjunctive treatment of focal onset seizures, with or without secondary generalisation',
      'Add-on therapy in patients inadequately controlled on one or two antiseizure medicines'
    ],
    composition: 'Each extended-release capsule contains zelafentin 150 mg or 300 mg. Excipients: hypromellose, ethylcellulose, talc, magnesium stearate.',
    dosage: 'Initiate 150 mg once daily in the evening; titrate in 150 mg increments at weekly intervals to a usual maintenance dose of 300–450 mg daily. Adjust the dose in renal impairment.',
    warnings: [
      'Abrupt discontinuation may precipitate seizures; taper over at least two weeks.',
      'Monitor for suicidal ideation and behaviour.',
      'Dizziness and somnolence may impair driving.',
      'Use with caution in hepatic impairment.'
    ],
    storage: 'Store below 25 °C. Keep capsules dry in the original container.',
    note: 'Prescription-only medicine. Refer to the current Summary of Product Characteristics before prescribing.'
  },
  {
    id: 'immuvance',
    name: 'Immuvance',
    generic: 'pelvimab',
    area: 'Immunology',
    type: 'Rx',
    form: 'Concentrate for solution for infusion',
    strengths: '10 mg/mL vial',
    short: 'Intravenous biologic for adults with refractory immune-mediated inflammatory arthritis.',
    indications: [
      'Moderate-to-severe immune-mediated inflammatory arthritis refractory to conventional synthetic DMARDs',
      'In combination with methotrexate, or as monotherapy where methotrexate is unsuitable'
    ],
    composition: 'Each mL of concentrate contains pelvimab 10 mg. Excipients: sucrose, polysorbate 80, sodium phosphate buffer.',
    dosage: 'Weight-based induction at weeks 0, 2, and 6, followed by maintenance every 8 weeks. Administer as an intravenous infusion over 60 minutes after dilution.',
    warnings: [
      'Screen for latent tuberculosis and hepatitis B before initiation.',
      'Risk of infusion-related reactions; premedication may be considered.',
      'Monitor for serious infections; hold therapy during active infection.',
      'Live vaccines are contraindicated during treatment.'
    ],
    storage: 'Store refrigerated at 2–8 °C. Do not freeze. Protect from light.',
    note: 'Prescription-only medicine. Administer under the supervision of a qualified healthcare professional.'
  },
  {
    id: 'glucorel',
    name: 'Glucorel',
    generic: 'metrelixin',
    area: 'Diabetes',
    type: 'Rx',
    form: 'Film-coated tablet',
    strengths: '5 mg · 10 mg · 25 mg',
    short: 'Oral glucose-lowering therapy for adults with type 2 diabetes, with cardiorenal benefit data in development.',
    indications: [
      'Type 2 diabetes mellitus as an adjunct to diet and exercise',
      'Improvement of glycaemic control when metformin is contraindicated or not tolerated'
    ],
    composition: 'Each tablet contains metrelixin 5 mg, 10 mg, or 25 mg. Excipients: mannitol, croscarmellose sodium, colloidal silicon dioxide, magnesium stearate.',
    dosage: 'Initiate 5 mg once daily in the morning; may increase to 10 mg after 4 weeks if additional glycaemic control is required. Maximum 25 mg daily. Assess renal function before initiation.',
    warnings: [
      'Not for use in type 1 diabetes or diabetic ketoacidosis.',
      'Risk of hypoglycaemia when combined with insulin or sulfonylureas.',
      'Discontinue at least 3 days before scheduled surgery.',
      'Monitor renal function at least annually.'
    ],
    storage: 'Store below 30 °C. Keep the blister in the outer carton to protect from light.',
    note: 'Prescription-only medicine.'
  },
  {
    id: 'vaxiven',
    name: 'Vaxiven',
    generic: 'recombinant trivalent influenza vaccine',
    area: 'Immunology',
    type: 'Vaccine',
    form: 'Suspension for injection in pre-filled syringe',
    strengths: '0.5 mL dose',
    short: 'Recombinant trivalent influenza vaccine for active immunisation of adults and children aged 6 months and older.',
    indications: [
      'Active immunisation against influenza caused by the three vaccine strains',
      'Recommended for adults aged 65 years and older and those at increased risk of complications'
    ],
    composition: 'Each 0.5 mL dose contains haemagglutinin from three influenza strains (15 µg per strain). Excipients: sucrose, polysorbate 80, trometamol, sodium chloride.',
    dosage: 'One 0.5 mL intramuscular dose annually. Children aged 6–35 months may receive a half dose according to local guidance. Revaccination each season is recommended.',
    warnings: [
      'Do not administer intravascularly.',
      'Anaphylaxis may occur; appropriate treatment must be immediately available.',
      'Defer vaccination in acute febrile illness.',
      'Immunosuppressed patients may have a diminished response.'
    ],
    storage: 'Store refrigerated at 2–8 °C. Do not freeze. Discard if the syringe has been frozen.',
    note: 'Vaccination should follow national immunisation schedules.'
  },
  {
    id: 'oncorix',
    name: 'Oncorix',
    generic: 'velmocimab',
    area: 'Oncology',
    type: 'Rx',
    form: 'Concentrate for solution for infusion',
    strengths: '100 mg/4 mL vial',
    short: 'Targeted antibody therapy for biomarker-selected relapsed or refractory solid tumours.',
    indications: [
      'Relapsed or refractory solid tumours with high tumour-cell expression of the target antigen',
      'In combination with chemotherapy in biomarker-selected patients'
    ],
    composition: 'Each 4 mL vial contains velmocimab 100 mg. Excipients: L-histidine, trehalose, polysorbate 20.',
    dosage: '200 mg intravenously every 3 weeks until disease progression or unacceptable toxicity. Premedicate before the first infusion. Dose adjustments per the prescribing information.',
    warnings: [
      'Infusion-related reactions, including cytokine release syndrome.',
      'Monitor complete blood counts; risk of neutropenia and thrombocytopenia.',
      'Do not administer live vaccines concurrently.',
      'Confirm biomarker status before initiating therapy.'
    ],
    storage: 'Store refrigerated at 2–8 °C in the original carton. Do not freeze or shake.',
    note: 'Prescription-only medicine. Administer in a setting equipped for management of infusion reactions.'
  },
  {
    id: 'dermacalm',
    name: 'Dermacalm',
    generic: 'hydrocortrel',
    area: 'Allergy',
    type: 'OTC',
    form: 'Topical cream',
    strengths: '0.5% · 1% w/w',
    short: 'Short-term relief of mild inflammatory skin conditions, including insect bites and contact dermatitis.',
    indications: [
      'Mild eczema and dermatitis',
      'Insect bite reactions and minor allergic skin irritation',
      'Short-term use on the face or in children only on medical advice'
    ],
    composition: 'Each gram of cream contains hydrocortrel 5 mg (0.5%) or 10 mg (1% w/w). Excipients: cetomacrogol, white soft paraffin, liquid paraffin, purified water.',
    dosage: 'Apply a thin layer to the affected area once or twice daily for up to 7 days. Do not use under occlusive dressings unless directed. Wash hands after application.',
    warnings: [
      'Do not use on broken or infected skin.',
      'Avoid contact with eyes and mucous membranes.',
      'Not for prolonged use; consult a doctor if symptoms persist beyond 7 days.',
      'Do not use on children under 2 years without medical advice.'
    ],
    storage: 'Store below 25 °C. Do not freeze. Keep the tube tightly closed.',
    note: 'Over-the-counter medicine. Always read the label and package leaflet.'
  },
  {
    id: 'gastrofix',
    name: 'Gastrofix',
    generic: 'pantopral',
    area: 'Gastroenterology',
    type: 'OTC',
    form: 'Gastro-resistant tablet',
    strengths: '20 mg',
    short: 'Short-term relief of heartburn and acid regurgitation in adults.',
    indications: [
      'Short-term treatment of reflux symptoms, including heartburn',
      'Symptomatic relief of acid-related dyspepsia'
    ],
    composition: 'Each gastro-resistant tablet contains pantopral 20 mg. Excipients: crospovidone, calcium carbonate, mannitol, methacrylic acid copolymer.',
    dosage: 'One 20 mg tablet once daily before a meal for up to 14 days. Swallow whole with water. If symptoms persist beyond 14 days, consult a physician.',
    warnings: [
      'Not for immediate relief of acute heartburn.',
      'Consult a doctor if symptoms persist or worsen.',
      'May reduce absorption of drugs requiring an acidic pH.',
      'Avoid in severe hepatic impairment.'
    ],
    storage: 'Store below 30 °C in the original blister. Protect from moisture.',
    note: 'Over-the-counter medicine. Read the package leaflet before use.'
  },
  {
    id: 'analgeva',
    name: 'Analgeva',
    generic: 'norvexin',
    area: 'Pain management',
    type: 'Rx',
    form: 'Film-coated tablet',
    strengths: '50 mg · 100 mg',
    short: 'Short-term treatment of moderate acute pain in adults.',
    indications: [
      'Moderate acute pain of short duration in adults',
      'Post-operative pain where opioid therapy is unsuitable'
    ],
    composition: 'Each tablet contains norvexin 50 mg or 100 mg. Excipients: lactose monohydrate, microcrystalline cellulose, croscarmellose sodium, magnesium stearate.',
    dosage: '50 mg every 6–8 hours as needed, to a maximum of 200 mg daily. Use the lowest effective dose for the shortest duration. Adjust in elderly patients and in renal impairment.',
    warnings: [
      'Risk of dependence and withdrawal with prolonged use.',
      'Avoid in severe hepatic impairment.',
      'May cause dizziness; caution when driving.',
      'Do not combine with other CNS depressants.'
    ],
    storage: 'Store below 25 °C. Keep in the original blister.',
    note: 'Prescription-only medicine. Refer to the current Summary of Product Characteristics before prescribing.'
  },
];
