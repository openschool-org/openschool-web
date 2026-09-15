// GENERATED FILE - do not edit directly.
// Source of truth: the GitHub Releases API for openschool-org/openschool, cached at src/data/changelog-cache.json.
// Regenerate with `npm run generate:content`.

export type ChangelogBlock =
  | {type: 'paragraph'; text: string}
  | {type: 'list'; items: string[]};

export type ChangelogSection = {
  heading: string;
  blocks: ChangelogBlock[];
};

export type ChangelogRelease = {
  slug: string;
  version: string;
  name: string;
  date: string;
  tag: string;
  prerelease: boolean;
  githubUrl: string;
  summary: string;
  contributors: string[];
  sections: ChangelogSection[];
};

const changelog: ChangelogRelease[] = [
  {
    "slug": "v0.2.0",
    "version": "v0.2.0",
    "name": "OpenSchool v0.2.0",
    "date": "2026-09-15",
    "tag": "v0.2.0",
    "prerelease": false,
    "githubUrl": "https://github.com/openschool-org/openschool/releases/tag/v0.2.0",
    "summary": "OpenSchool v0.2.0 delivers a major backend architecture refactor and improves the project’s reliability, developer experience, and documentation. The backend is now organised as a modular monolith, with each feature owning its routes, business logic, database access, and API contracts. This release also adds broader integration testing, stronger CI checks, and fixes API compatibility issues found in the frontend.",
    "contributors": [
      "chamals3n4",
      "HasithaErandika"
    ],
    "sections": [
      {
        "heading": "What's Included",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release includes the following improvements and new functionality:"
          },
          {
            "type": "list",
            "items": [
              "NIC-based default passwords for teacher/guardian accounts and index-number defaults for students, plus a universal self-service password reset and forced first-login password change",
              "Class medium (language of instruction) support, wired into the setup wizard and promotion's auto-distribution logic",
              "Analytics dashboard covering student, staff, academic, and school-wide aggregates",
              "PDF report export for attendance and marks",
              "Staff management, including non-academic staff records and staff attendance",
              "Expanded student profile portfolio including progress reports, activities, leadership roles, awards, and disciplinary records",
              "In-app position/leadership hierarchy including Principal, Vice Principal, Section Head, Class Teacher, and Subject Teacher, layered on top of the base ThunderID roles",
              "Position-scoped notification permissions and a role-differentiated teacher dashboard",
              "Academic year promotion and class reassignment, including marks-based and random auto-distribution assist tools",
              "Full timetable module covering settings, grade sections, classrooms, subject period requirements, teacher availability, and a draft → validate → submit → review → approve/publish workflow",
              "In-app notification system with role/position-scoped recipient targeting and a per-user notification center",
              "Guardian directory with search, shared-guardian linking, and orphan filtering",
              "House colors and a self-balancing (least-populated-house) assignment algorithm for students and staff",
              "Audit log for sensitive changes, including house reassignment and attendance-lock overrides",
              "Attendance session locking for 24 hours with admin override",
              "Guardian absence notifications",
              "First-run onboarding with one-time admin registration and a guided School Setup wizard covering school profile, houses, grades, classes, and mediums",
              "Switched identity provider integration to ThunderID, previously Asgardeo, behind a provider-neutral internal/identity.Provider seam"
            ]
          }
        ]
      },
      {
        "heading": "Backend Architecture",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The backend modular-monolith refactor has been completed."
          },
          {
            "type": "paragraph",
            "text": "Each feature now owns its:"
          },
          {
            "type": "list",
            "items": [
              "HTTP routes",
              "Business logic",
              "Database adapter",
              "API contracts"
            ]
          },
          {
            "type": "paragraph",
            "text": "The old shared handler, service, repository, model, and route layers were removed."
          },
          {
            "type": "paragraph",
            "text": "This release also introduces API-wide per-IP rate limiting, which was previously limited to the first-run admin registration endpoint only."
          },
          {
            "type": "paragraph",
            "text": "Database connection pool sizing has also been tuned for expected load."
          }
        ]
      },
      {
        "heading": "Reliability and Security",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release fixes several important issues and adds stronger protections:"
          },
          {
            "type": "list",
            "items": [
              "Fixed broken access control on attendance and term-marks endpoints",
              "Batched two N+1 query patterns in list endpoints",
              "Swagger UI is no longer served outside development builds",
              "Restored the snake_case JSON API fields used by class and curriculum screens",
              "Added audit logging for sensitive changes",
              "Added attendance session locking with admin override",
              "Added API-wide per-IP rate limiting"
            ]
          }
        ]
      },
      {
        "heading": "Documentation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release significantly expands and updates the project's documentation:"
          },
          {
            "type": "list",
            "items": [
              "Added docs/FEATURES.md, the current as-built feature reference",
              "Added docs/ARCHITECTURE.md",
              "Added docs/adr/ (Architecture Decision Records) for significant, easy-to-relitigate design decisions",
              "Added audit.md, a standing code-quality and security audit with tracked severity/status",
              "Added SECURITY.md",
              "Added CODE_OF_CONDUCT.md",
              "Added this changelog",
              "Corrected stale claims in docs/SETUP.md, including the teacher dashboard mock-data note and the \"starting over\" TRUNCATE TABLE table list, which was missing ~20 tables added by later migrations",
              "Added backend and frontend README files",
              "Refreshed the root README and contributor guide",
              "Simplified environment example files"
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "v0.1.0",
    "version": "v0.1.0",
    "name": "OpenSchool v0.1.0",
    "date": "2026-08-11",
    "tag": "v0.1.0",
    "prerelease": false,
    "githubUrl": "https://github.com/openschool-org/openschool/releases/tag/v0.1.0",
    "summary": "OpenSchool v0.1.0 is the first public release of OpenSchool, an open source, self-hosted school management system built specifically for Sri Lankan schools. OpenSchool provides a modern alternative to paper-based processes and expensive proprietary school management software, while allowing schools to retain full control of their data and infrastructure.",
    "contributors": [
      "HasithaErandika",
      "chamals3n4"
    ],
    "sections": [
      {
        "heading": "What's Included",
        "blocks": [
          {
            "type": "paragraph",
            "text": "This release includes the core functionality required for day-to-day school operations:"
          },
          {
            "type": "list",
            "items": [
              "Student, teacher, and guardian record management",
              "Class, subject, and curriculum management",
              "Attendance tracking with present, absent, late, and excused statuses",
              "Attendance editing controls with audit logging",
              "School house management with automatic balancing",
              "Role-based access for Principals, Vice Principals, Section Heads, Class Teachers, and Subject Teachers",
              "Academic year promotion with an administrative preview before changes are committed",
              "Teaching and non-teaching staff management",
              "Staff attendance and leave tracking",
              "Student profiles including progress reports, activities, leadership roles, awards, and disciplinary records",
              "Prefect board management with year-by-year history",
              "Analytics dashboard for attendance, student and staff statistics, and academic performance",
              "PDF reports for attendance and marks",
              "Authentication through ThunderID",
              "Login using NIC numbers or student index numbers as default credentials"
            ]
          }
        ]
      },
      {
        "heading": "Built for Sri Lankan Schools",
        "blocks": [
          {
            "type": "paragraph",
            "text": "OpenSchool is designed around the structures and workflows commonly found in Sri Lankan schools, including:"
          },
          {
            "type": "list",
            "items": [
              "Houses",
              "Grades and classes",
              "Sinhala, Tamil, and English mediums",
              "Academic streams",
              "Terms",
              "School leadership and teaching roles"
            ]
          },
          {
            "type": "paragraph",
            "text": "These concepts are part of the platform's core design rather than workarounds added to a generic school management system."
          }
        ]
      },
      {
        "heading": "Technology",
        "blocks": [
          {
            "type": "paragraph",
            "text": "OpenSchool is built as a monorepo using:"
          },
          {
            "type": "list",
            "items": [
              "Backend: Go REST API",
              "Frontend: React with Carbon Design System",
              "Authentication: ThunderID"
            ]
          }
        ]
      },
      {
        "heading": "Out of Scope",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The following features are not part of this release:"
          },
          {
            "type": "list",
            "items": [
              "Full learning management and online classroom functionality",
              "School fee and finance management",
              "Public-facing mobile applications"
            ]
          },
          {
            "type": "paragraph",
            "text": "These may be considered for future development."
          }
        ]
      }
    ]
  }
];

export default changelog;
