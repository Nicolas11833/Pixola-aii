import { OptionGrid } from '@/components/ui/OptionGrid';
import { ASPECT_RATIOS } from '@/lib/constants';
import { AspectRatioId } from '@/types';

export function RatioSelector({ value, onChange }: { value: AspectRatioId; onChange: (id: AspectRatioId) => void }) {
  return (
    <div>
      <p className="mb-2.5 text-sm font-medium text-ink-primary">Proporção</p>
      <OptionGrid
        columns={3}
        compact
        options={ASPECT_RATIOS.map((r) => ({ id: r.id, label: r.label, description: r.ratio }))}
        value={value}
        onChange={(id) => onChange(id as AspectRatioId)}
      />
    </div>
  );
}
