import { OptionGrid } from '@/components/ui/OptionGrid';
import { IMAGE_STYLES } from '@/lib/constants';
import { StyleId } from '@/types';

export function StyleSelector({ value, onChange }: { value: StyleId; onChange: (id: StyleId) => void }) {
  return (
    <div>
      <p className="mb-2.5 text-sm font-medium text-ink-primary">Estilo</p>
      <OptionGrid
        columns={2}
        options={IMAGE_STYLES.map((s) => ({ id: s.id, label: s.label, description: s.description, icon: s.emoji }))}
        value={value}
        onChange={(id) => onChange(id as StyleId)}
      />
    </div>
  );
}
