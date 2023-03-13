import { Button } from "@sol/ui/components/Button";
import { Title } from "solid-start";
import { useTranslation } from "~/utils/i18n";

export default function Scans() {
  const { t } = useTranslation("scans");

  return (
    <main class="flex grow flex-col">
      <Title>{t("title")}</Title>
      <Button>{t("hello")}</Button>
    </main>
  );
}
