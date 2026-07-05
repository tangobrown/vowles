/* Honeypot trap. Positioned off-screen and hidden from assistive tech; humans
   never see or tab into it. Bots that fill every form field will fill this
   too — the caller reads the value and short-circuits to a fake success
   state without sending anything, so the bot thinks it worked but Formspree
   never sees the submission. Field is named "website" (plausible-looking)
   rather than "_gotcha" so simple pattern-matching bots don't skip it. */
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
