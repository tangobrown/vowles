/* Honeypot trap. Positioned off-screen and hidden from assistive tech; humans
   never see or tab into it. Bots that fill every form field will fill this
   too — the value is sent with the enquiry and /api/enquiry drops the
   submission (returning success, so the bot can't tell) rather than emailing
   it. The drop is logged. Field is named "website" (plausible-looking)
   rather than "_gotcha" so simple pattern-matching bots don't skip it.

   Caveat: because "website" is a real-looking field name, some password
   managers will autofill it for a genuine visitor, whose enquiry is then
   dropped as spam. The server log is what makes that diagnosable. */
export function HoneypotField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-9999px] top-0 h-px w-px overflow-hidden"
    >
      <label>
        Website (leave empty)
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}
