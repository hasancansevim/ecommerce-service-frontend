import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  success(message: string, title: string = 'İşlem Başarılı') {
    this.toastr.success(message, title);
  }

  error(message: string, title: string = 'Hata') {
    this.toastr.error(message, title);
  }

  warning(message: string, title: string = 'Uyarı') {
    this.toastr.warning(message, title);
  }

  info(message: string, title: string = 'Bilgi') {
    this.toastr.info(message, title);
  }

  confirm(
    title: string = 'Emin misiniz?',
    text: string = 'Bu işlem geri alınamaz!',
    confirmBtnText: string = 'Evet, Sil'
  ): Promise<boolean> {
    const isDark = document.body.classList.contains('dark');
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#3b82f6',
      confirmButtonText: confirmBtnText,
      cancelButtonText: 'Vazgeç',
      // Dark mode renk ayarları
      background: isDark ? '#1e293b' : '#fff',
      color: isDark ? '#fff' : '#000',
    }).then((result) => {
      return result.isConfirmed; // return True or False
    });
  }
}
