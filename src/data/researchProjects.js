
/**
 * Selected research projects for the four research themes.
 *
 * IMAGE SETUP
 * -----------
 * Save your images inside:
 * public/images/projects/
 *
 * The filename in each project's "image" field must
 * match the uploaded filename exactly.
 *
 * Missing files display a placeholder automatically.
 *
 * Update imageAlt and imageCaption to match the
 * actual image, with attribution where necessary.
 */

export const projectsByTheme = {

  // ==========================================
  // COMPUTATIONAL & MULTISCALE MECHANICS
  // ==========================================

  "computational-multiscale-mechanics": [
    {
      id: "pharmaceutical-discrete-element-modelling",

      title:
        "Computational Modelling of Pharmaceutical Powders and Tablet Compaction",

      status: "Selected research project",

      summary:
        "Particle-based numerical modelling of pharmaceutical granular materials, with an emphasis on powder behaviour, inter-particle contact and the mechanics of compaction. This project connects microscopic interactions to the mechanical response of compressed granular assemblies.",

      image: "/images/projects/pharmaceutical-compaction.png",

      imageAlt:
        "Computational model of pharmaceutical particles subjected to compression",

      imageCaption:
        "Illustration of pharmaceutical granular materials during particle-based compaction.",

      focus: [
        "Discrete element modelling and inter-particle contact",
        "Particle rearrangement and deformation during compaction",
        "Micro-to-macro interpretation of granular response"
      ],

      publicationIds: [],

      extraPublications: []
    },

    {
      id: "flexible-riser-modelling",

      title:
        "Computational Modelling of Flexible Risers",

      status: "Published research",

      summary:
        "Development and assessment of a structural finite-element formulation for flexible risers, including the treatment of inextensibility constraints. The work addresses efficient numerical representation of slender riser behaviour under applied loading and boundary conditions.",

      image: "/images/projects/flexible-riser.png",

      imageAlt:
        "Computational model of a flexible offshore riser",

      imageCaption:
        "Illustration of flexible-riser geometry and structural modelling.",

      focus: [
        "Efficient structural finite-element formulations",
        "Nodal enforcement of inextensibility constraints",
        "Boundary-condition flexibility and numerical efficiency"
      ],

      publicationIds: [
        "conf2017riser"
      ],

      extraPublications: []
    }
  ],


  // ==========================================
  // ARCHITECTED MATERIALS & METAMATERIALS
  // ==========================================

  "architected-materials-metamaterials": [
    {
      id: "architected-lattice-design",

      title:
        "Computational Design and Mechanical Evaluation of Architected Metamaterials",

      status: "Research concept",

      summary:
        "A geometry-driven research direction investigating periodic lattices, gyroid-like architectures and other architected unit cells. The proposed workflow combines parametric geometry, computational meshing and mechanical analysis to explore how architecture influences stiffness, deformation and load transfer.",

      image: "/images/projects/architected-lattice.png",

      imageAlt:
        "Meshed gyroid or architected lattice showing a conceptual mechanical-response field",

      imageCaption:
        "Conceptual illustration of a meshed architected lattice.",

      focus: [
        "Parametric unit-cell and lattice generation",
        "Finite-element meshing and boundary conditions",
        "Relative density and stiffness–mass trade-offs"
      ],

      // New ongoing research subsection within this existing metamaterials project.
      ongoingResearch: {
        status: "ONGOING RESEARCH",
        title: "AI-Guided Design of Damage-Tolerant Mechanical Metamaterials",
        summary:
          "This ongoing research investigates whether bio-inspired branching and redundant load-transfer pathways can be embedded within monolithic mechanical metamaterials to preserve load-bearing performance following localised damage. The proposed approach combines parametric gyroid and spatially modified lattice design, finite-element analysis and machine-learning-guided optimisation.",
        objective:
          "Investigate whether damage tolerance can be improved through spatially programmed lattice architecture and alternative load paths, without increasing overall material usage.",
        image: "/images/projects/ai-guided-damage-tolerant-metamaterials.png",
        imageAlt:
          "Conceptual illustration linking leaf-venation-inspired design, intact and locally damaged architected lattices, finite-element evaluation, AI-guided optimisation and experimental validation",
        imageCaption:
          "Conceptual research illustration showing the proposed design, analysis, optimisation and validation workflow. Lattice damage and coloured fields are illustrative, not calculated simulation results.",
        methods: [
          "Generate reference sheet-gyroid and bio-inspired, spatially modified lattice architectures at approximately equal relative density.",
          "Establish a reliable CAD-to-FEA pipeline to compare intact and locally damaged structures under equivalent loading and boundary conditions.",
          "Quantify stiffness, stress redistribution and residual load-bearing capacity to assess potential damage tolerance.",
          "Train and validate machine-learning models on verified finite-element results before using them for design optimisation.",
          "Additively manufacture selected candidates and compare experimental mechanical measurements with model predictions."
        ]
      },

      publicationIds: [],

      extraPublications: []
    },

    {
      id: "metamaterial-energy-absorption",

      title:
        "Metamaterial Unit Cells for Energy Absorption and Vibration Control",

      status: "Suggested research direction",

      summary:
        "A proposed study comparing selected lattice and auxetic-inspired unit-cell architectures for their deformation mechanisms, energy absorption and dynamic response. It investigates geometry, strut and wall dimensions, and relative density through numerical simulations before considering prototype tests.",

      image: "/images/projects/metamaterial-energy-absorption.png",

      imageAlt:
        "Mechanical metamaterial unit-cell array proposed for energy absorption or vibration control",

      imageCaption:
        "Conceptual metamaterial design for energy absorption and vibration control.",

      focus: [
        "Comparative unit-cell geometry design",
        "Quasi-static energy-absorption evaluation",
        "Potential vibration or dynamic-response assessment",
        "Design optimisation and optional additive-manufacturing validation"
      ],

      publicationIds: [],

      extraPublications: []
    }
  ],


  // ==========================================
  // BIO-INSPIRED MATERIALS & STRUCTURES
  // ==========================================

  "bio-inspired-materials-structures": [
    {
      id: "bone-tissue-scaffolding",

      title:
        "Design and Mechanical Evaluation of Bone Tissue Scaffolds",

      status: "Published research",

      summary:
        "Computational and mechanical evaluation of porous polymer scaffolds for bone tissue engineering. The work investigates the influence of scaffold geometry, pore characteristics and material selection on mechanical performance in support of biologically relevant design.",

      image: "/images/projects/bone-tissue-scaffold.png",

      imageAlt:
        "Porous bone tissue scaffold designed for computational and mechanical assessment",

      imageCaption:
        "Designing engineered bone tissue scafolds.",

      focus: [
        "Scaffold geometry, pore size and porosity",
        "Finite-element prediction of mechanical response",
        "3D-printed PLA and related material systems",
        "Balancing mechanical and biological design considerations"
      ],

      publicationIds: [
        "akbari2025",
        "akbari2023",
        "conf2024scaffold",
        "conf2022scaffold",
        "conf2020taguchi"
      ],

      extraPublications: []
    },

    {
      id: "deer-antler-aircraft-engine-mount",

      title:
        "Deer-Antler-Inspired Cellular Lattice Architectures for Aircraft Engine Mounts",

      status: "Research study",

      summary:
        "Research into deer-antler-inspired cellular architectures for prospective aircraft engine-mount applications. It explores the relationship between biologically inspired unit-cell design, structural loading and the mechanical behaviour of additively manufactured components.",

      image: "/images/projects/deer-antler-lattice.png",

      imageAlt:
        "Deer-antler-inspired cellular lattice architecture for aircraft engine-mount applications",

      imageCaption:
        "Illustration of a deer-antler-inspired cellular architecture for aerospace supports.",

      focus: [
        "Biomimetic cellular architecture and load paths",
        "Computational evaluation of lattice configurations",
        "Additive manufacturing and mechanical testing",
        "Applications to lightweight aerospace support components"
      ],

      publicationIds: [
        "conf2025engine"
      ],

      extraPublications: [
        {
          title:
            "Design and Mechanical Evaluation of Deer-Antler-Inspired Cellular Lattice Architectures for Prospective Aircraft Engine Mount Applications",

          note:
            "Google Scholar citation record supplied by the author",

          url:
            "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Kvc66oIAAAAJ&sortby=pubdate&citation_for_view=Kvc66oIAAAAJ:CHSYGLWDkRkC"
        },

        {
          title:
            "Antler-Inspired Cellular Design for Enhanced Mechanical Performance of Additively Manufactured Aircraft Engine Mount Brackets",

          note:
            "Research Square preprint (2026); not identified here as a peer-reviewed journal article",

          url:
            "https://doi.org/10.21203/rs.3.rs-8484741/v1"
        }
      ]
    },

    {
      id: "spider-web-bearing-support",

      title:
        "Design and Structural Evaluation of a Spider-Web-Inspired Lightweight Bearing Support Plate",

      status: "Proposed student project",

      summary:
        "This proposed project will investigate whether spider-web-inspired radial ribs and connecting rings can reduce the mass of a bearing support plate while maintaining sufficient stiffness and limiting displacement, rotation and warping at the bearing interface. A conventional support plate will provide a reference design under the same dimensions, material, loading and support conditions.",

      image: "/images/projects/spider-web-bearing-support.png",

      imageAlt:
        "Proposed spider-web-inspired bearing support plate with radial ribs and connecting rings",

      imageCaption:
        "Preliminary spider-web-inspired support-plate concept; not a validated design.",

      focus: [
        "Review spider-web geometry, load paths and existing support-plate designs",
        "Develop and select radial-rib and ring-supported plate concepts",
        "Investigate selected rib dimensions and arrangements",
        "3D-print prototypes and compare their measured mass and load–deflection behaviour"
      ],

      publicationIds: [],

      extraPublications: []
    }
  ],


  // ==========================================
  // STRUCTURAL MECHANICS & ENGINEERING
  // ==========================================

  "structural-mechanics-engineering": [
    {
      id: "structures-under-thermomechanical-loading",

      title:
        "Structures Under Moderate and Extreme Thermomechanical Loading",

      status: "Published research",

      summary:
        "Analytical and numerical investigation of the mechanical response of structural components subjected to temperature changes and thermal gradients. This includes nonlinear deformation and stability of plates, shells and other components under coupled mechanical and thermal loading, with relevance to extreme events such as fire.",

      image: "/images/projects/structures-under-fire.png",

      imageAlt:
        "Finite-element representation of a heated frame or plate structure",

      imageCaption:
        "Structural response of flat slabs under fire.",

      focus: [
        "Temperature-dependent material and structural behaviour",
        "Nonlinear thermal deformation and stability",
        "Thermomechanical analysis of plates and shells",
        "Modelling benchmarks for structures under fire"
      ],

      publicationIds: [
        "khazaeinejad2015",
        "khazaeinejad2014",
        "khazaeinejad2016a",
        "khazaeinejad2016b",
        "conf2015beams",
        "conf2014plates2"
      ],

      extraPublications: []
    },

    {
      id: "functionally-graded-shell-buckling-vibration",

      title:
        "Buckling and Vibration Analysis of Functionally Graded Shell Structures",

      status: "Published research",

      summary:
        "Investigation of the stability and vibration of shell structures whose material properties vary spatially. Analytical and numerical studies consider critical buckling loads, natural frequencies, loading conditions and the effects of material gradation on the response of cylindrical and related shell geometries.",

      image: "/images/projects/functionally-graded-shell.png",

      imageAlt:
        "Functionally graded shell structure with a computational buckling or vibration mode shape",

      imageCaption:
        "Vibration modes of a functionally graded plate.",

      focus: [
        "Buckling under axial compression and external pressure",
        "Vibration frequencies and mode shapes",
        "Functionally graded material descriptions",
        "Analytical solutions and finite-element comparison"
      ],

      publicationIds: [
        "najafizadeh2022",
        "gheisari2017",
        "najafizadeh2011",
        "khazaeinejad2010a",
        "khazaeinejad2010b",
        "conf2009ring",
        "conf2008free"
      ],

      extraPublications: []
    },

    {
      id: "analytical-benchmarks-opensees",

      title:
        "Analytical Solutions for Benchmarking Finite-Element Codes and OpenSees",

      status: "Published methodological research",

      summary:
        "Development and use of analytical and semi-analytical solutions as reference problems for numerical structural analysis. The selected work includes nonlinear thermomechanical response of plates and computational modelling of shells in fire. These are related methodological publications; their inclusion does not imply that every analytical solution was implemented in OpenSees.",

      image: "/images/projects/opensees-benchmark.png",

      imageAlt:
        "Comparison of analytical structural response with a finite-element solution or OpenSees model",

      imageCaption:
        "Analytical and finite-element approaches to structural response benchmarking.",

      focus: [
        "Closed-form and analytical benchmark problems",
        "Nonlinear thermal and mechanical response",
        "Comparison against numerical finite-element predictions",
        "OpenSees-based shell modelling in fire-related applications"
      ],

      publicationIds: [
        "conf2012opensees",
        "conf2012stress",
        "khazaeinejad2014",
        "khazaeinejad2015"
      ],

      extraPublications: []
    }
  ]
};
