<template>
  <section id="contact">
    <div class="notification-container user-select-none">
      <div v-if="showAlert" :class="['alert-toast', formError ? 'alert-danger' : 'alert-success']">
        {{ formError || formSuccess }}
      </div>
    </div>

    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p>Get in touch for collaborations or opportunities</p>
      </div>

      <div class="row g-4 align-items-stretch">
        <!-- Left Column - Contact Info -->
        <div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-duration="800">
          <div class="card border-0 shadow-sm h-100 d-flex flex-column bg-body-secondary">
            <div class="card-body p-4 d-flex flex-column">
              <h3 class="mb-4">Let's Talk</h3>
              <p class="mb-4 flex-grow-1">
                I'm open to freelance opportunities, full-time positions, and collaborations. Feel free to reach out if
                you have a project in mind or just want to connect.
              </p>
              <div class="contact-info">
                <div class="d-flex mb-4" v-for="(item, index) in contactItems" :key="index">
                  <div class="d-flex align-items-center">
                    <div class="bg-primary bg-opacity-10 p-3 me-3 rounded-3">
                      <i :class="`bi bi-${item.icon} text-primary fs-5`"></i>
                    </div>
                    <div>
                      <h6 class="fw-bold mb-1">{{ item.title }}</h6>
                      <p class="text-muted mb-0 small">{{ item.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Contact Form -->
        <div class="col-lg-7 col-md-12" data-aos="fade-up">
          <div class="card border-0 shadow-sm h-100 d-flex flex-column bg-body-secondary">
            <div class="card-body p-4 d-flex flex-column">
              <h3 class="mb-4">Send Message to <cite class="text-info">Telegram</cite></h3>
              <form @submit.prevent="submitForm" class="flex-grow-1 d-flex flex-column">
                <div class="row g-3 flex-grow-1">
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="name" v-model="form.name" placeholder="Your Name"
                        required>
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="telegramUsername" v-model="form.telegramUsername"
                        placeholder="Telegram Username" required>
                      <label for="telegramUsername">Your Telegram Username (without @)</label>
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input type="text" class="form-control" id="subject" v-model="form.subject" placeholder="Subject">
                  <label for="subject">Subject</label>
                </div>
                <div class="form-floating flex-grow-1 mb-3">
                  <textarea class="form-control" id="message" v-model="form.message" placeholder="Your Message"
                    style="height: 120px" required></textarea>
                  <label for="message">Your Message</label>
                </div>
                <div class="d-flex justify-content-end mt-auto">
                  <button type="submit" class="btn btn-outline-primary px-4" :disabled="isSubmitting">
                    <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                    {{ isSubmitting ? submittingText : buttonText }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      contactItems: [
        { icon: "bi bi-geo-alt", title: "Location", text: "Sangkat Toeuk Thla, Khan Sen Sok, Phnom Penh, Cambodia." },
        { icon: "bi bi-phone", title: "Phone", text: "086 397 836" },
        { icon: "bi bi-telegram", title: "Telegram", text: "@cheatzx" }
      ],

      form: {
        name: "",
        subject: "",
        message: "",
        telegramUsername: ""
      },

      telegramConfig: {
        botToken: "7842549809:AAGUKszjuUlY0l5Km6RKU_OF4XDbOuIC1Jk",
        chatId: "5058242890"
      },

      isSubmitting: false,
      buttonText: "Send Message",
      submittingText: "Sending...",
      formError: "",
      formSuccess: "",
      showAlert: false,
      alertTimeout: null
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.formError = "";
      this.formSuccess = "";
      this.showAlert = false;

      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
      }

      try {
        await this.sendViaTelegram();
        this.formSuccess = "Your message has been sent successfully!";
        this.resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
        this.formError = "Failed to send your message. Please try again later.";
      } finally {
        this.isSubmitting = false;
        this.showAlert = true;

        this.alertTimeout = setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      }
    },

    async sendViaTelegram() {
      const escapeMarkdown = (text) => {
        return String(text).replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
      };

      const messageText = `
          🔔 New Contact Form Portfolio

      *🌟 Telegram:* @${escapeMarkdown(this.form.telegramUsername)}
      *👤 Name:* ${escapeMarkdown(this.form.name)}
      *📝 Subject:* ${escapeMarkdown(this.form.subject)}
      *✉️ Message:* ${escapeMarkdown(this.form.message)}`;

      try {
        const response = await axios.post(
          `https://api.telegram.org/bot${this.telegramConfig.botToken}/sendMessage`,
          {
            chat_id: this.telegramConfig.chatId,
            text: messageText,
            parse_mode: 'MarkdownV2'
          }
        );
        return response;
      } catch (error) {
        console.error('Telegram API error:', error);
        throw error;
      }
    },

    resetForm() {
      this.form = {
        name: "",
        telegramUsername: "",
        subject: "",
        message: "",
      };
    }
  }
}
</script>

<style scoped>
/* Alert notification styling */
.notification-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1050;
  width: auto;
  max-width: 90%;
}

.alert-toast {
  margin-top: 40px;
  padding: 12px 24px;
  border-radius: 8px;
  animation: fadeInDown 0.5s ease, fadeOutUp 0.5s ease 4.5s;
  backdrop-filter: blur(10px);
  border: 1px solid;
  min-width: 250px;
  text-align: center;
}

.alert-success {
  background-color: rgba(25, 135, 84, 0.65);
  color: white;
  border: 1px solid rgba(25, 135, 84, 0.9);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.alert-danger {
  background-color: rgba(220, 53, 69, 0.65);
  color: white;
  border: 1px solid rgba(220, 53, 69, 0.9);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>