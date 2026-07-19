// GENERATED FILE — do not edit directly.
// Source of truth: src/data/features/*.md
// Regenerate with `npm run generate:content`.

export type FeatureIcon =
  | 'Calendar'
  | 'Building2'
  | 'GraduationCap'
  | 'Users'
  | 'UserRound'
  | 'UsersRound'
  | 'BookOpen'
  | 'CalendarCheck'
  | 'UserCog'
  | 'Waves'
  | 'ListChecks'
  | 'ShieldCheck';

export type FeatureGroup = 'foundation' | 'structure' | 'people' | 'operations';

export type Feature = {
  slug: string;
  title: string;
  icon: FeatureIcon;
  order: number;
  group: FeatureGroup;
  homeFeatured: boolean;
  summary: string;
  items: string[];
};

const features: Feature[] = [
  {
    "slug": "academic-year-management",
    "title": "Academic Year Management",
    "icon": "Calendar",
    "order": 1,
    "group": "structure",
    "homeFeatured": true,
    "summary": "Create academic years, set the current one, and drill into every class tied to it.",
    "items": [
      "Create academic years",
      "View all academic years",
      "Set the current academic year",
      "Delete academic years",
      "View classes belonging to an academic year"
    ]
  },
  {
    "slug": "school-management",
    "title": "School Management",
    "icon": "Building2",
    "order": 2,
    "group": "foundation",
    "homeFeatured": false,
    "summary": "One authoritative school profile — create, view, and update core school information.",
    "items": [
      "Create school profile",
      "View school information",
      "Update school information"
    ]
  },
  {
    "slug": "grade-management",
    "title": "Grade Management",
    "icon": "GraduationCap",
    "order": 3,
    "group": "structure",
    "homeFeatured": true,
    "summary": "The full Grade 1-13 flow - Scholarship years, O/Level, and A/Level - ordered with subjects and elective buckets assigned to each.",
    "items": [
      "Model the full flow from Grade 1 to Grade 13, not just A/Level",
      "Covers Scholarship years (1-5), O/Level (10-11), and A/Level (12-13)",
      "Create, view, update, and delete grades",
      "Organize grades by sort order",
      "Assign subjects to grades",
      "Manage elective subject buckets",
      "Remove subjects from grades"
    ]
  },
  {
    "slug": "class-management",
    "title": "Class Management",
    "icon": "Users",
    "order": 4,
    "group": "people",
    "homeFeatured": true,
    "summary": "Classes with form and subject teachers, and full enrollment control.",
    "items": [
      "Create classes",
      "View current classes",
      "Update class details",
      "Delete classes",
      "Assign form teachers",
      "Assign subject teachers",
      "View students in each class",
      "Enroll and remove students"
    ]
  },
  {
    "slug": "student-management",
    "title": "Student Management",
    "icon": "UserRound",
    "order": 5,
    "group": "people",
    "homeFeatured": false,
    "summary": "Student profiles, current class, and subject selections in one view.",
    "items": [
      "View all students",
      "View individual student profiles",
      "Update student information",
      "Delete students",
      "View student's current class",
      "Manage subject selections"
    ]
  },
  {
    "slug": "guardian-management",
    "title": "Guardian (Parent) Management",
    "icon": "UsersRound",
    "order": 6,
    "group": "people",
    "homeFeatured": true,
    "summary": "Guardians linked to students, with a primary contact set per student.",
    "items": [
      "Add guardians",
      "Update guardian information",
      "Link guardians to students",
      "Remove guardian links",
      "Set primary guardian/contact",
      "View guardians for each student"
    ]
  },
  {
    "slug": "subject-management",
    "title": "Subject Management",
    "icon": "BookOpen",
    "order": 7,
    "group": "structure",
    "homeFeatured": false,
    "summary": "The subject catalog, assignable to grades and elective buckets.",
    "items": [
      "Create subjects",
      "View all subjects",
      "Assign subjects to grades",
      "Add subjects to elective buckets"
    ]
  },
  {
    "slug": "attendance-management",
    "title": "Attendance Management",
    "icon": "CalendarCheck",
    "order": 8,
    "group": "operations",
    "homeFeatured": true,
    "summary": "Sessions, marking, and summaries by student, class, or session.",
    "items": [
      "Create attendance sessions",
      "Mark attendance",
      "View attendance by session",
      "View attendance by student",
      "Attendance summaries",
      "View attendance sessions for classes"
    ]
  },
  {
    "slug": "teacher-management",
    "title": "Teacher Management",
    "icon": "UserCog",
    "order": 9,
    "group": "people",
    "homeFeatured": false,
    "summary": "Form and subject teacher assignments across every class.",
    "items": [
      "Assign form teachers",
      "Assign subject teachers",
      "View teachers assigned to classes"
    ]
  },
  {
    "slug": "stream-management",
    "title": "Stream Management (A/L Streams)",
    "icon": "Waves",
    "order": 10,
    "group": "structure",
    "homeFeatured": true,
    "summary": "Model Science, Commerce, and Arts streams with grouped subjects such as Bio or Maths.",
    "items": [
      "Model streams like Science, Commerce, and Arts",
      "Create, update, delete, and view streams",
      "Create stream groups (e.g. Bio, Maths)",
      "Manage stream groups"
    ]
  },
  {
    "slug": "subject-selection-system",
    "title": "Subject Selection System",
    "icon": "ListChecks",
    "order": 11,
    "group": "structure",
    "homeFeatured": false,
    "summary": "Students choose, update, and view their elective subject selections.",
    "items": [
      "Students choose elective subjects",
      "Update selections",
      "Delete selections",
      "View selected subjects"
    ]
  },
  {
    "slug": "authentication-security",
    "title": "Authentication & Security",
    "icon": "ShieldCheck",
    "order": 12,
    "group": "foundation",
    "homeFeatured": true,
    "summary": "Bearer token authentication protects nearly every endpoint across the platform.",
    "items": [
      "Bearer token authentication",
      "Protected API access on most endpoints",
      "Consistent auth model across every module"
    ]
  }
];

export default features;
