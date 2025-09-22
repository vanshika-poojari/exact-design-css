import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Filter, FileText, Grid3X3, Download, RefreshCw } from "lucide-react";

interface Template {
  templateKey: string;
  language: string;
  name: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  createdAt: string;
  updatedAt: string;
}

const templates: Template[] = [
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "rst_pwd",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  },
  {
    templateKey: "welcome_eml",
    language: "en",
    name: "Joe",
    subject: "Reset your Password",
    htmlContent: "We received a request to reset password",
    textContent: "We received a request to reset password",
    createdAt: "2025-09-10T11:15:44.55123dZ",
    updatedAt: "2025-09-15T14:22:33.923456Z"
  }
];

export default function TemplatesTable() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-foreground">Templates</h1>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <span className="mr-2 text-lg">+</span>
              Create template
            </Button>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-border bg-background text-foreground hover:bg-accent">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" className="border-border bg-background text-foreground hover:bg-accent">
              <FileText className="mr-2 h-4 w-4" />
              CSV
            </Button>
            <Button variant="outline" className="border-border bg-background text-foreground hover:bg-accent">
              <Grid3X3 className="mr-2 h-4 w-4" />
              Excel
            </Button>
            <Button variant="outline" className="border-border bg-background text-foreground hover:bg-accent">
              <Download className="mr-2 h-4 w-4" />
              JSON
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Records count */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">Showing 5 of 10 records</p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-border bg-card">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-table-header">
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Template Key</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Language</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Name</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Subject</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">HTML Content</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Text Content</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Created At</th>
                <th className="border-r border-table-border px-4 py-3 text-left text-sm font-medium text-foreground">Updated At</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border bg-card hover:bg-table-row-hover transition-colors"
                >
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground">{template.templateKey}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground">{template.language}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground">{template.name}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground">{template.subject}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground max-w-xs truncate">{template.htmlContent}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground max-w-xs truncate">{template.textContent}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground">{template.createdAt}</td>
                  <td className="border-r border-table-border px-4 py-3 text-sm text-foreground">{template.updatedAt}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-primary hover:bg-accent hover:text-primary"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}