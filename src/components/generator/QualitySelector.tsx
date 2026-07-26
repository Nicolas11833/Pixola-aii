import { OptionGrid } from '@/components/ui/OptionGrid';
import { QUALITIES } from '@/lib/constants';
import { QualityId } from '@/types';

export function QualitySelector({ value, onChange }: { value: QualityId; onChange: (id: QualityId) => void }) {
  return (
    <div>
      <p className="mb-2.5 text-sm font-medium text-ink-primary">Qualidade</p>
      <OptionGrid
        columns={3}
        compact
        options={QUALITIES.map((q) => ({ id: q.id, label: q.label, description: q.description }))}
        value={value}
        onChange={(id) => onChange(id as QualityId)}
      />
    </div>
  );
}
