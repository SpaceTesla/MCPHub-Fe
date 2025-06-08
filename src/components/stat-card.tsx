import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <h3 className="text-muted-foreground mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}
