import FadeIn from "@/components/ui/animation/FadeIn";
import RulesSection from "@/components/RulesSection";

const Rules = () => {
  return (
    <>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-cinzel font-bold text-primary-light mb-6">Правила Магистики</h1>
              <p className="text-xl opacity-80 mb-8">
                Наши правила созданы для того, чтобы каждый мог комфортно и безопасно наслаждаться магическим миром. Пожалуйста, ознакомьтесь внимательно.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      <RulesSection showFullButton={false} />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="bg-[#1E1E1E] rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-cinzel font-bold mb-6 text-primary-light">Дополнительные правила</h2>
              
              <div className="space-y-6">
                <p className="opacity-90">
                  Администрация Магистики оставляет за собой право вносить изменения в правила без предварительного уведомления. Следите за обновлениями на нашем сайте и в официальных каналах.
                </p>
                
                <div className="p-4 border border-primary/30 rounded-lg bg-primary/5">
                  <h3 className="text-xl font-cinzel mb-3 text-light">Важное примечание</h3>
                  <p className="opacity-80">
                    Незнание правил не освобождает от ответственности. Перед началом игры мы настоятельно рекомендуем ознакомиться со всеми пунктами правил, чтобы избежать недоразумений в будущем.
                  </p>
                </div>
                
                <p className="opacity-90">
                  Если вы заметили нарушение правил другими игроками, пожалуйста, сообщите об этом администрации через раздел "Поддержка". Помогите нам сделать мир Магистики еще лучше!
                </p>
                
                <div className="text-center mt-8">
                  <p className="text-sm opacity-70 italic">
                    Последнее обновление правил: {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Rules;
