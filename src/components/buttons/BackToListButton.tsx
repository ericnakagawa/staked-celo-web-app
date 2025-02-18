import Link from 'next/link';
import { ThemedIcon } from 'src/components/icons/ThemedIcon';
import { Mode } from 'src/types';
import { appendChainIdToLink } from 'src/utils/appendChainIdToLink';
import { useChainId } from 'wagmi';

function modeToCollectionName(mode: Mode) {
  switch (mode) {
    case Mode.governance:
      return 'proposals';
    case Mode.validators:
      return 'validator groups';
    default:
      return 'list';
  }
}
interface Props {
  mode: Mode;
}

export const BackToListButton = ({ mode }: Props) => {
  const chainId = useChainId();
  const href = appendChainIdToLink(`/${mode}`, chainId);
  return (
    <Link href={href}>
      <div className="flex flex-row items-center rounded-[16px] gap-2 cursor-pointer">
        <ThemedIcon name="arrow" alt="open" classes="rotate-[90deg]" height={24} width={24} />
        <span className="font-medium text-[14px] text-color-secondary">
          return to {modeToCollectionName(mode)}
        </span>
      </div>
    </Link>
  );
};
