<script lang="ts">
  let agenda: string[] = [];
  let newAgenda: string = "";

  function addAgenda(): void {
    if (newAgenda.trim()) {
      agenda = [...agenda, newAgenda.trim()];
      newAgenda = "";
    }
  }

  function removeAgenda(index: number): void {
    if (confirm("Are you sure you want to remove this agenda item?")) {
      agenda.splice(index, 1);
      agenda = [...agenda]; // Update the agenda array to trigger reactivity
    }
  }
</script>

<main>
  <h1>SvelteKit Agendas App</h1>
  <div class="container">
    <div class="add-agenda">
      <input
        class="agenda-input"
        bind:value={newAgenda}
        placeholder="Add a new agenda"
      />
      <button class="add-button" on:click={addAgenda}>Add</button>
    </div>
    {#if agenda.length === 0}
      <p class="empty-message">No agenda items. Add some!</p>
    {/if}
    <ul class="agenda-list">
      {#each agenda as agendaItem, index (agendaItem)}
        <li class="agenda-item">
          {agendaItem}
          <button class="remove-button" on:click={() => removeAgenda(index)}
            >Remove</button
          >
        </li>
      {/each}
    </ul>
  </div>
</main>

<style>
  main {
    font-family: "Arial", sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f2f5;
    border-radius: 10px;
    max-width: 600px;
    margin: 40px auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  h1 {
    color: #333;
    margin-bottom: 20px;
  }
  .container {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  .add-agenda {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .agenda-input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 70%;
    margin-right: 10px;
    font-size: 16px;
  }
  .add-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .add-button:hover {
    background-color: #0056b3;
  }
  .empty-message {
    color: #666;
    margin: 20px;
  }
  .agenda-list {
    list-style-type: none;
    padding: 0;
  }
  .agenda-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
  }
  .agenda-item:hover {
    background-color: #f1f1f1;
  }
  .remove-button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .remove-button:hover {
    background-color: #c82333;
  }
</style>
