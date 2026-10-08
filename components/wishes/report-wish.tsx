"use client"

import { Flag } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Field, Select, TextArea } from "@/components/ui/controls"
import { Dialog } from "@/components/ui/dialog"
import { Note } from "@/components/ui/note"
import { wishLimits } from "@/lib/validation"

const reasons = [
  "Suspicious request",
  "Inappropriate content",
  "Personal information exposed",
  "Something else",
]

export function ReportWish({ title }: { title: string }) {
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState("")
  const [details, setDetails] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [finished, setFinished] = useState(false)

  function close() {
    setOpen(false)
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!reason) {
      setError("Choose a reason.")
      return
    }
    if (details.length > wishLimits.details) {
      setError(`Keep the details under ${wishLimits.details} characters.`)
      return
    }
    setError(null)
    setFinished(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setFinished(false)
          setOpen(true)
        }}
        className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink"
      >
        <Flag className="h-4 w-4" aria-hidden="true" />
        Report this wish
      </button>
      <Dialog
        open={open}
        onClose={close}
        title={`Report “${title}”`}
        description="Tell us what feels off. Reports in this preview are not delivered to a review team."
      >
        {finished ? (
          <div className="space-y-4">
            <Note>
              This report was not sent. There is no moderation service connected,
              so a person will not review it. The form is here so the path is
              ready.
            </Note>
            <Button onClick={close}>Close</Button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={submit} noValidate>
            <Field label="Reason" htmlFor="report-reason" error={error ?? undefined}>
              <Select
                id="report-reason"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? "report-reason-error" : undefined}
              >
                <option value="">Choose one</option>
                {reasons.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Field>
            <Field
              label="Details"
              htmlFor="report-details"
              hint="Optional. Leave out anyone's private contact information."
            >
              <TextArea
                id="report-details"
                value={details}
                maxLength={wishLimits.details}
                onChange={(event) => setDetails(event.target.value)}
                aria-describedby="report-details-hint"
              />
            </Field>
            <Button type="submit">Submit report</Button>
          </form>
        )}
      </Dialog>
    </>
  )
}
