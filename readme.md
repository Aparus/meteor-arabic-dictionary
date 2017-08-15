Это живой арабско-русский словарь. Он постоянно улучшается, дополняется, исправляется, как сама база слов, так и программные алгоритмы поиска и взаимодействия с переводчиками. Любой пользователь может участвовать в улучшении. Администраторы одобряют или отклоняют правки. 

# Планируемые фичи: 
- добавление тем (тэгов) к словарным статьям
- указание корня в каждой словарной статье - взаимные ссылки от одной статьи к другой
- система ролей и модерации на основе рейтинга (голосования)
- комментарии к статьям 
- изменение порядка вариантов перевода и примеров использования (drug&drop)
- голосование за вариант перевода и пример использования 
- формирование статистики 
  - самых частотных слов (по поиску), 
  - самых частоиспользуемых переводов (по голосованию)
  - голосование при выдаче поиска: "это слово подошло", "этот перевод подошел"
- сохрание в избранное: статей, переводов, примеров. И их группировка по проектам.
- добавление картинок и аудио(?) к статьям 

# Морфология
- Режим созвучных звуков (когда сходные буквы приравниваются [زذظ] и т.п.) - для перевода на слух;
- Разделение слитно написанных слов на отдельные слова, перевод ключевого и вывод объяснения разбора и вспомогательных слов. بالفلاحين = ب + ال + فلاح +ـين

# Валидация 
1) ташдид идет после буквы перед огласовкой. Ташдид не бывает после огласовки

# Редакторам 
1) разделяйте переводы и примеры в отдельные, соответствующие поля
2) в примерах обращайте внимание на тильду в начале и конце строки, при переносе примера в отдельное поле, тильда занимает противоположное место (если была в конце - встаёт вначало и наоборот) 
3) огласовки над лигатурой Лям-Алиф зачастую стоят неправильно 

# Баги и проблемы
- классы к форме редактирования статьи! (пока что привязка ко вложенности, которая нарушается при появлении нового поля :nth-child)
- переделать форму на более удобном и гибком инструменте нежели Autoform 